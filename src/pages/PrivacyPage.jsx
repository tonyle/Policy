import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const PrivacyPage = () => {
  const { appId } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchPrivacy = async () => {
      const ref = doc(db, 'pages', appId);
      const snap = await getDoc(ref);
      if (snap.exists() && snap.data().privacy) {
        setContent(snap.data().privacy);
      } else {
        setContent('Privacy Policy not found for this app.');
      }
    };

    fetchPrivacy();
  }, [appId]);

  return (
    <div className="terms-container">
      <h1>Privacy Policy</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default PrivacyPage;
