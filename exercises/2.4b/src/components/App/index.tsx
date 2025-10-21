import type { User } from '../../types';
import UserCard from '../UserCard';
import './App.css'


const users : User[] = [
  { name : "Lola", age : 12, online : true},
  { name : "Martin", age : 53, online : false},
  { name : "Aya", age : 19, online : true}
];

const App = () => (
<>
<h1>Users</h1>
{users.map((user, index) => (
  <UserCard key={index} user={user} />
))}
</>
);

export default App
