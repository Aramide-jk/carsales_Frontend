import styled from "styled-components";
import { motion } from "framer-motion";

export const ProfileContainer = styled(motion.div)`
  min-height: 100vh;
  padding: 120px 2rem 4rem;
  background: #f8f7f4;

  @media (max-width: 768px) {
    padding: 100px 1rem 4rem;
  }
`;

export const ProfileWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  gap: 2rem;
`;

export const ProfileHeader = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  gap: 1.5rem;
  justify-content: space-between;
  text-transform: capitalize;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Avatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #dc2626, #ef4444);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 600;
  font-family: "Playfair Display", serif;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;
export const UserDetails = styled.div`
  h2 {
    font-family: "Playfair Display", serif;
    font-size: 2rem;
    color: #1a1a1a;
    margin: 0 0 0.25rem;
  }
  p {
    color: #666;
    font-size: 1.1rem;
    margin: 0;
  }
`;

export const LogoutButton = styled.button`
  background: transparent;
  color: #ef4444;
  padding: 0.6rem 1.2rem;
  border: 2px solid #ef4444;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: #ef4444;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(239, 68, 68, 0.25);
  }
  svg {
    stroke-width: 2.5px;
  }
`;

export const ActivitySection = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const SectionTitle = styled.h3`
  font-family: "Playfair Display", serif;
  font-size: 1.8rem;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(220, 38, 38, 0.2);
`;

export const ActivityList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 1.5rem;
`;

export const ActivityItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 12px;
  background: #f8f7f4;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-transform: capitalize;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ActivityIcon = styled.div<{ status: string }>`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ status }) =>
    status === "completed"
      ? "#22c55e"
      : status === "cancelled"
      ? "#ef4444"
      : "#f97316"};
  color: white;
`;

export const ActivityDetails = styled.div`
  flex-grow: 1;
  p {
    margin: 0;
    color: #2b2b2b;
    font-weight: 500;

    span {
      color: #666;
      font-weight: 400;
    }
  }
  small {
    color: #999;
    font-size: 0.85rem;
  }
`;

export const ActivityStatus = styled.div<{ status: string }>`
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: capitalize;
  color: white;
  background-color: ${({ status }) =>
    status === "completed"
      ? "#22c55e"
      : status === "cancelled"
      ? "#ef4444"
      : "#f97316"};
`;

export const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  font-size: 1.2rem;
  color: #666;
`;

export const ErrorMessage = styled.div`
  text-align: center;
  padding: 2rem;
  background: rgba(239, 68, 68, 0.1);
  color: #b91c1c;
  border-radius: 12px;
`;

export const NoActivityMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: #999;
`;
