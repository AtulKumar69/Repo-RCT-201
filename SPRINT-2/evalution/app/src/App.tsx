
import { Input } from "./Components/Input";
import { Image } from "./Components/Image";
import { Pagination } from "./Components/Pagination";
import Eye from './Components/eye.svg'
function App() {
  // const [count , setcount] = useState(1)
  return (
    <div className="container">
      <Input  rightLogo={Eye} variant='outline' type={undefined} size={undefined} rightLogoOnClick={undefined} onChange={undefined} />

      <Image  src="https://media-exp1.licdn.com/dms/image/C5603AQHt33rzbGzyPw/profile-displayphoto-shrink_800_800/0/1649499585785?e=1659571200&v=beta&t=50IYTIEZAWxjVwT8b2bY9dDBstjRdltkWSP3XlH0O_Q" 
      borderRadius="50%"
      width="100px"
      height="100px"
      fit="cover"
      alt="pic"
      />

      <Pagination total={20} selected={1} onPageChange="onChange" />
    </div>
  );
}

export default App;