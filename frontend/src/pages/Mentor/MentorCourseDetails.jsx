import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import TitleCard from "../../Components/TitleCard";
import ProfileCard from "../../Components/ProfileCard";
import "./css/MentorCourseDetails.css";
import CourseOverviewCard from "../../Components/CourseOverviewCard";
import CourseContent from "../../Components/CourseContent";
import MyCourseDetailCard from "../../Components/MyCourseDetailcard";

function MentorCourseDetails() {
  const { courseId } = useParams();
  const [courseDetails, setCourseDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        console.log(courseId);
        const response = await axios.get(
          `http://localhost:8000/mentor/chapters-list/${courseId}/`
        );
        console.log(response.data);
        setCourseDetails(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching course details:", error);
        setLoading(false);
      }
    };

    fetchCourseDetails();
  }, [courseId]);

  return (
    <div className="MentorCourse-details">
      <div className="Content-top">
        <div className="title-content">
          <TitleCard titleName="Course Details" />
        </div>

        <div className="profile-content">
          <ProfileCard />
        </div>
      </div>
      {!loading && courseDetails && (
        <div className="Content-bottom">
          <MyCourseDetailCard
            courseCover={courseDetails.course.cover_photo}
            courseName={courseDetails.course.title}
            courseOwner={courseDetails.course.mentor}
            courseRating={4.5}
            courseMembers="10K"
            courseBio={courseDetails.course.description}
          />
          <CourseOverviewCard />

          <CourseContent
            chapters={courseDetails.chapters}
            notes={courseDetails.notes}
          />
        </div>
      )}
    </div>
  );
}

export default MentorCourseDetails;
