"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const SelectedProfile = ({ params }) => {
  const router = useRouter();
  //   const { data: session } = useSession();
  const searchParams = useSearchParams();
  const profileName = searchParams.get("name");

  const [selectedUserPosts, setSelectedUserPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`);
      const data = await response.json();

      setSelectedUserPosts(data);
    };

    if (params?.id) fetchPosts();
  }, [params.id]);

  return (
    <Profile
      name={profileName}
      desc={`Welcome to ${profileName}'s personalized profile page.`}
      data={selectedUserPosts}
      //   handleEdit={handleEdit}
      //   handleDelete={handleDelete}
    />
  );
};

export default SelectedProfile;
