export const Image = ({ src, alt, borderRadius, width, height, fit }) => {
  return (
    <div>
      <img  src={"https://media-exp1.licdn.com/dms/image/C5603AQHt33rzbGzyPw/profile-displayphoto-shrink_800_800/0/1649499585785?e=1659571200&v=beta&t=50IYTIEZAWxjVwT8b2bY9dDBstjRdltkWSP3XlH0O_Q"} style={{borderRadius:"50%",width:"100px",height:"100px",fit:"cover"}} alt={alt}/>
    </div>
  );
};