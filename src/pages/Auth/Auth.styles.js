/* eslint-disable import/prefer-default-export */
export const FormSX = {
  p: 3,
  zIndex: 1,
  top: '50%',
  left: '72%',
  boxShadow: 6,
  userSelect: 'none',
  // overflow: 'hidden',
  position: 'absolute',
  borderRadius: '20px',
  transition: 'transform 0.3s',
  width: { xs: '90%', sm: 540 },
  minHeight: { xs: '90%', sm: 500 },
  transform: 'translate(-50%, -50%)',
  padding: '40px',

  img: {
    p: '16px 32px',
  },

  button: {
    height: '3rem',
    color: 'white',
    // textShadow: '1px 1px 1px rgba(0, 0, 0, 0.6)',
  },

  a: {
    fontWeight: '300',
    lineHeight: '14px',
    color: 'grey.700',
    fontSize: '16px',
    transition: 'color 0.3s',
    // textShadow: '1px 1px 1px rgba(0, 0, 0, 0.6)',
  },

  '& span': {
    fontSize: '0.75rem',
  },
  '& input': {
    fontSize: '16px',
    borderRadius: '5px',
  },
  '& label.Mui-focused ': {
    pt: 0.2,
  },
  '& .MuiFormLabel-root': {
    fontSize: '16px',
  },
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#f2efeff7',
    '&:hover fieldset': {
      borderColor: 'primary.main',
    },
  },
};
