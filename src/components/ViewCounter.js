/**@jsx jsx */
import { jsx } from 'theme-ui';
import { useEffect, useState } from 'react';

import supabase from '../utils/supabase';

const ViewCounter = ({ id }) => {
  const [viewCount, setViewCount] = useState(null);

  useEffect(() => {
    if (id) {
      (async () => {
        const { data, error } = await supabase
          .from('views')
          .select()
          .match({ post: id });
        if (data.length === 0) {
          await supabase.from('views').insert([{ post: id, views: 1 }]);
          setViewCount(1);
        }
        if (data.length > 0) {
          await supabase
            .from('views')
            .update({ views: data[0].views + 1 })
            .match({ post: id });
          setViewCount(data[0].views + 1);
        }
        if (error) {
          console.log(error.message);
        }
      })();
    }
  }, [id]);

  return (
    <p sx={{ variant: 'text.viewCount' }}>
      {viewCount ? viewCount : `---`} views
    </p>
  );
};

export default ViewCounter;
