import { Card, Button } from 'antd';
import ButtonEdit from  './buttonEdit'


const Post = ({ userid, id, title, body, deletePost, editPost }) => (
  <Card>
    <div>ID = {id}</div>
    <div>UserID = {userid}</div>
    <div>Title: {title}</div>
    <div>Content: {body}</div>
    <Button onClick={() => deletePost(id)} type="primary">Delete</Button>
    <ButtonEdit id={id} editPost={editPost}>Edit</ButtonEdit>  
  </Card>
);

export default Post;
