import Typography from '@mui/material/Typography';

interface TitleProps {
  children?: React.ReactNode;
}

export const Title = ({ children }: TitleProps) => {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {children}
    </Typography>
  );
};
