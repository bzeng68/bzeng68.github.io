import { Avatar } from "@mui/material"

export default function Headshot() {
    return (
      <Avatar
        alt='Bryan Zeng'
        src='/BZeng_Headshot.jpeg'
        sx={{ width: 164, height: 164, margin: '0 auto', border: '1px solid rgba(255,255,255,0.16)', boxShadow: '0 22px 65px rgba(0,0,0,0.42)' }}
      />
    )
}