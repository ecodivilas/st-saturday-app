// const user = {
//     name: 'Hedy Lamarr',
//     imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//     imageSize: 90,  
//   };
  
//   export default function Profile() {
//     return (
//       <>
//         <h1>{user.name}</h1>
//         <img
//           className="avatar"
//           src={user.imageUrl}
//           alt={'Photo of ' + user.name}
//           style={{
//             width: user.imageSize,
//             height: user.imageSize
//           }}
//         />
//       </>
//     );
//   }  

export default function Profile() {
    function handleClick() {
      alert('You clicked me!');
    }
  
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <button onClick={handleClick} className="p-2 py-1 text-sm font-semibold text-white rounded-lg bg-slate-900">
        Click me
      </button>
      </div>
    );

}