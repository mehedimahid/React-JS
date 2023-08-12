import React,{ useState, useEffect } from 'react'
import axios from 'axios'

function FetchingData() {
    // const [posts, setPosts] = useState([])
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromBtnClick, setIdFromBtnClick] = useState(1)

    const clickHandaler = () => {
         setIdFromBtnClick(id)
     }
    useEffect(() => {
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        // axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromBtnClick}`)
            .then(res => {
                console.log(res)
                // setPosts(res.data)
                setPost(res.data)
            })
            .catch(err => {
            console.log(err)
        })
    // },[id])
    },[idFromBtnClick])
  return (
      <div>
          <input type='text' value={id} onChange={e => setId(e.target.value)} />
          <button type='button' onClick={clickHandaler}>Fetch Data </button>
          {/* //button na dile inpua id dile title show korbe */}
          <div>{post.title }</div>
       {/* <ul>
            {
                posts.map(post => <li key={post.id}>{post.title }</li>)
            }
      </ul> */}
    </div>
  )
}

export default FetchingData
