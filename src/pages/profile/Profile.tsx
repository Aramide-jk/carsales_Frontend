import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import {
  getProfile,
  getInspections,
  getSellRequests,
} from "../../services/api";
import type { User, InspectionBooking, SellRequest } from "../../types";
import { Check, X, Calendar, ClipboardList, LogOut } from "lucide-react";
import LoadingSpinner from "../../components/LoadingSpinner";
import {
  ProfileContainer,
  ProfileWrapper,
  ProfileHeader,
  Avatar,
  UserInfo,
  UserDetails,
  LogoutButton,
  ActivitySection,
  SectionTitle,
  ActivityList,
  ActivityItem,
  ActivityIcon,
  ActivityDetails,
  ActivityStatus,
  // LoadingSpinner,
  NoActivityMessage,
} from "./profile.styles";

const Profile: React.FC = () => {
  const { token, logout } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [inspections, setInspections] = useState<InspectionBooking[]>([]);
  const [sellRequests, setSellRequests] = useState<SellRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!token) {
      navigate("/signin");
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        const [profileData, inspectionsData, sellRequestsData] =
          await Promise.all([
            getProfile(),
            getInspections(),
            getSellRequests(),
          ]);
        setUser(profileData);
        setInspections(inspectionsData || []);
        setSellRequests(sellRequestsData || []);
      } catch (err) {
        setError("Failed to load profile data. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token, navigate]);

  if (loading) {
    return <LoadingSpinner text="Loading Profile..." />;
  }

  if (error) {
    return <LoadingSpinner text={error} />;
  }

  if (!user) return null;

  const getStatusIcon = (status: string) => {
    if (status === "completed") return <Check size={20} />;
    if (status === "cancelled") return <X size={20} />;
    return <Calendar size={20} />;
  };

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  return (
    <ProfileContainer>
      <ProfileWrapper>
        <ProfileHeader>
          <Avatar>{user.name.charAt(0)}</Avatar>
          <UserInfo>
            <h2>{user.name}</h2>
            <UserDetails>
              <p>{user.email}</p>
            </UserDetails>
          </UserInfo>
          <LogoutButton onClick={handleLogout}>
            <LogOut size={18} />
            Logout
          </LogoutButton>
        </ProfileHeader>

        <ActivitySection>
          <SectionTitle>My Inspections</SectionTitle>
          {inspections.length > 0 ? (
            <ActivityList>
              {inspections.map((inspection) => {
                const car =
                  typeof inspection.car === "object" && inspection.car !== null
                    ? inspection.car
                    : null;

                const brand = car?.brand || "N/A";
                const model = car?.model || "N/A";

                return (
                  <ActivityItem key={inspection._id}>
                    <ActivityIcon status={inspection.status}>
                      {getStatusIcon(inspection.status)}
                    </ActivityIcon>

                    <ActivityDetails>
                      <p>
                        Inspection for{" "}
                        <span>
                          {brand} {model}
                        </span>
                      </p>
                      <small>
                        {new Date(inspection.date).toLocaleDateString()} at{" "}
                        {inspection.time}
                      </small>
                    </ActivityDetails>

                    <ActivityStatus status={inspection.status}>
                      {inspection.status}
                    </ActivityStatus>
                  </ActivityItem>
                );
              })}
            </ActivityList>
          ) : (
            <NoActivityMessage>
              <ClipboardList size={40} />
              <p>You have no inspection activities yet.</p>
            </NoActivityMessage>
          )}
        </ActivitySection>

        <ActivitySection>
          <SectionTitle>My Sell Requests</SectionTitle>
          {sellRequests.length > 0 ? (
            <ActivityList>
              {sellRequests.map((request) => (
                <ActivityItem key={request._id}>
                  <ActivityIcon status={request.status}>
                    {getStatusIcon(request.status)}
                  </ActivityIcon>

                  <ActivityDetails>
                    <p>
                      Sell request for{" "}
                      <span>
                        {request.brand} {request.model}
                      </span>
                    </p>
                    <small>
                      Submitted on{" "}
                      {new Date(request.createdAt).toLocaleDateString()}
                    </small>
                  </ActivityDetails>
                  <ActivityStatus status={request.status}>
                    {request.status}
                  </ActivityStatus>
                </ActivityItem>
              ))}
            </ActivityList>
          ) : null}
        </ActivitySection>
      </ProfileWrapper>
    </ProfileContainer>
  );
};
export default Profile;
