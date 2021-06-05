/**@jsx jsx */
import { jsx } from 'theme-ui';
import { useEffect, useState } from 'react';
import firebase from 'gatsby-plugin-firebase';
import incrementViews from '../lib/increment-views';

const ViewCounter = ({ id }) => {
  const [viewCount, setViewCount] = useState('');

  useEffect(() => {
    // 1 is displayed for a split second and then the correct count
    // This is a workaround this
    const onViews = (newViews) => {
      setViewCount(newViews.val() === 1 ? 0 : newViews.val());
    };

    incrementViews(id);

    firebase.database().ref(`/views`).child(id).on(`value`, onViews);

    return () => {
      if (firebase.database()) {
        firebase.database().ref(`/views`).child(id).off(`value`, onViews);
      }
    };
  }, [id]);

  // useEffect(() => {
  // }, [id]);

  return (
    <p sx={{ variant: 'text.viewCount' }}>
      {viewCount ? viewCount : `---`} views
    </p>
  );
};

export default ViewCounter;
