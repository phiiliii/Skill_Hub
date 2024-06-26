import React from 'react'
import "./css/MentorUpload.css";
import TitleCard from '../../Components/TitleCard';
import ProfileCard from '../../Components/ProfileCard';
import UploadWidget from '../../Components/UploadWidget';
function MentorUpload() {
  return (
    <div className="Mentor-upload">
      <div className="Content-top">
        <div className="title-content">
          <TitleCard titleName="Course Chapters" />
        </div>

        <div className="profile-content">
          <ProfileCard />
        </div>
      </div>
      <div className="Content-bottom">
      <h1>Course Content</h1>
     <UploadWidget />
      </div>
      </div>
  );
}

export default MentorUpload