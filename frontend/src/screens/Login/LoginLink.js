import React from 'react'
import PersonIcon from '@material-ui/icons/Person'
import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'

export default function Login() {
  return (
    <IconButton
      aria-label='cart'
      style={{ outline: 'none', marginLeft: '-0.5rem' }}
    >
      <Badge
        color='error'
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <PersonIcon style={{ marginTop: '0.3rem' }} />
        Sign In
      </Badge>
    </IconButton>
  )
}
