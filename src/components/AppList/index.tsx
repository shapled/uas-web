import React, {useState, useEffect} from 'react'
import InfiniteScroll from 'react-infinite-scroller';
import { List, Spin } from 'antd';
import { RightOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import api from '../../api'
import {App} from '../../api/entity'
import styles from './index.module.less'

interface IProps {
  className?: string
}

function AppList(props: IProps) {
  const [page, setPage] = useState<number>(1)
  const [total, setTotal] = useState<number>(Infinity)
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<App[]>([])
  const [empty, setEmpty] = useState<boolean>(false)  // some error
  const hasMore = !empty && (data?.length || 0) < total
  const loadData = () => {
    setLoading(true)
    api.getApps(page).then(resp => {
      if (resp.data?.length === 0) {
        setEmpty(true)
        return
      }
      setData([...data, ...resp.data])
      setTotal(resp.total)
      setPage(resp.page + 1)
      setLoading(false)
    })
  }
  return (
    <div className={props.className}>
      <InfiniteScroll
          initialLoad={true}
          pageStart={0}
          loadMore={loadData}
          hasMore={!loading && hasMore}
          useWindow={false}
        >
        <List
          dataSource={data}
          renderItem={item => (
            <List.Item key={item.id} className={styles.listItem}>
              <List.Item.Meta
                title={item.app}
                description={item.description}
              />
              <Link to={`/app/detail/${item.id}`}>
                <div className={styles.detail}>详细信息<RightOutlined/></div>
              </Link>
            </List.Item>
          )}
        >
          {loading && hasMore && (
            <div className="demo-loading-container">
              <Spin />
            </div>
          )}
        </List>
      </InfiniteScroll>
    </div>
  )
}

export default AppList
