import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const TermsPage = () => {
  const { appId } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchTerms = async () => {
      const ref = doc(db, 'pages', appId);
      const snap = await getDoc(ref);
      if (snap.exists() && snap.data().terms) {
        console.log('Terms fetched:', snap.data().terms);
        setContent(snap.data().terms);
      } else {
        setContent('Terms & Conditions not found for this app.');
      }
    };

    fetchTerms();
  }, [appId]);

  return (
    <div className="terms-container">
      <h1>Terms & Conditions</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default TermsPage;
