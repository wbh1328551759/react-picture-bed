import React, {useEffect} from 'react';
import {observer} from 'mobx-react';
import {useStores} from '../stores';
import InfiniteScroll from 'react-infinite-scroller';
import {List, Spin} from 'antd';
import styled from 'styled-components';


const Img = styled.img`
  max-width: 100px;
  max-height: 120px;
  object-fit: contain;
  border: 1px solid #eee;
`;

const Component = observer(() => {
  const {HistoryStore} = useStores();

  const loadMore = () => {
    HistoryStore.find();
  };

  useEffect(() => {

    return () => {
      HistoryStore.reset()
    }
  }, [])


  return (
    <div>
      <InfiniteScroll
        initialLoad={true}
        pageStart={0}
        loadMore={loadMore}
        hasMore={!HistoryStore.isLoading && HistoryStore.hasMore}
        useWindow={false}
      >
        <List
          dataSource={HistoryStore.list}
          renderItem={
            item => (<List.Item key={item.id}>
              {item.attributes.url ?
                <>
                  <div>
                    <Img src={item.attributes.url.attributes.url}/>
                  </div>
                  <div>
                    <h5>{item.attributes.url.attributes? item.attributes.filename:null}</h5>
                  </div>
                  <div>
                    <a target="_blank"
                       href={item.attributes.url.attributes.url}>{item.attributes.url ? item.attributes.url.attributes.url : ''}</a>
                  </div>
                </> : '已删除'}
            </List.Item>)
          }
        >
          {HistoryStore.isLoading && HistoryStore.hasMore && (
            <div>
              <Spin tip="加载中"/>
            </div>
          )}
        </List>
      </InfiniteScroll>
    </div>
  );
});

export default Component;