import React from 'react';

// Define a TypeScript interface for our profile data props.
interface ProfileDataProps {
    name?: string;
    email?: string;
    // Add other profile fields if required, such as profileImageUrl, etc.
}

const ProfileData: React.FC<ProfileDataProps> = ({ name, email }) => {
    return (
        <div className="profile-data">
            <h2>{name || "Default Name"}</h2>
            <p>{email || "default@example.com"}</p>
            {/* Render other profile information here */}
        </div>
    );
}

export default ProfileData;
