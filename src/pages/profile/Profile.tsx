import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { getProfile, getInspections } from "../../services/api";
import type { User, InspectionBooking } from "../../types";
import {
  Check,
  X,
  Calendar,
  Loader,
  ClipboardList,
  LogOut,
} from "lucide-react";
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
  LoadingSpinner,
  ErrorMessage,
  NoActivityMessage,
} from "./profile.styles";

const Profile: React.FC = () => {
  const { token, logout } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [inspections, setInspections] = useState<InspectionBooking[]>([]);
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
        const [profileData, inspectionsData] = await Promise.all([
          getProfile(),
          getInspections(),
        ]);
        setUser(profileData);
        setInspections(inspectionsData);
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
    return (
      <ProfileContainer>
        <LoadingSpinner>
          <Loader className="animate-spin" /> Loading Profile...
        </LoadingSpinner>
      </ProfileContainer>
    );
  }

  if (error) {
    return (
      <ProfileContainer>
        <ErrorMessage>{error}</ErrorMessage>
      </ProfileContainer>
    );
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
      </ProfileWrapper>
    </ProfileContainer>
  );
};
export default Profile;
