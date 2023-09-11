import Button from "@mui/material/Button";

export default function Header() {
  const logged: boolean = true;
  return (
    <div className="bg-blue-300 flex">
      <p>
        <strong>Staffs</strong>
      </p>
      {logged ? (
        <div className='flex'>
          <p>Icon</p>
          <p>User name</p>
        </div>
      ) : (
        <div>
          <Button variant="contained">Login</Button>
          <Button variant="outlined">Sign/Up</Button>
        </div>
      )}
    </div>
  );
}
