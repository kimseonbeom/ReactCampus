import React, { useEffect, useState } from 'react'
import { getHomeworkList } from './api';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
`;
export const Card = styled.div`
  width: 100%;
  border: 1px solid dodgerblue;
  cursor: pointer;
  padding: 10px;
`;
export const Text = styled.div`
  color: #333;
  overflow-wrap: break-word;
  word-break: break-all;
`;

function Homework() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

// useEffect(() => {
//     getHomeworkList()
//       .then(res => setData(res.data))
//       .catch(err => console.error(err));
//   }, []);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getHomeworkList();
        setData(res.data);
        setLoading(false);
        console.log(res);
        
      } catch (err) {
        console.error(err);
        setData([]);
      } 
    }
    fetchData();
  }, []);

  return (
    <>    
    <Container>
      {loading ? (
        <p>로딩중...</p>
        ) : !data.homeworkList || data.homeworkList.length === 0 ? (
          <p>데이터 없음</p>
        ) : (
          data.homeworkList.map(hw => (
            <Card key={hw.hwNo}>
              <Text>제목 : {hw.hwName}</Text>
              <Text>내용 : {hw.hwDesc}</Text>
            </Card>
          ))
        )}
    </Container>
    </>
  );
}

export default Homework;