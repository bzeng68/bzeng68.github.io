import { Avatar } from "@mui/material"

export default function Headshot() {
    return (
      <Avatar
        alt='Bryan Zeng'
        src='/BZeng_Headshot.jpeg'
        sx={{ width: 150, height: 150, margin: '0 auto', border: '4px solid #d9d9d9' }}
      />
    )
}