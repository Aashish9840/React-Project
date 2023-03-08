import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import CloseIcon from '@mui/icons-material/Close';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import { color } from '@mui/system';
  
  const Footer = () => {
    return (
      <div className='w-full bg-gray-100 py-16'>
        <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
          <div className='sm:flex text-center justify-between items-center'>
            <h1 className='font-bold text-[20px]'>BEACHES.</h1>
            <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
              <FacebookIcon sx={{fontSize:'30px', color:'blue'}} />
              <TwitterIcon  sx={{fontSize:'30px', color:'gray'}}/>
              <GitHubIcon   sx={{fontSize:'30px', color:'pink'}}/>
              <InstagramIcon sx={{fontSize:'30px', color:'red'}}  />
            </div>
          </div>
          <div className='flex justify-between'>
            <ul className='lg:flex'>
              <li className='ml-3 text-[18px] mt-4'>About</li>
              <li className='ml-3 text-[18px] mt-4'>Partnerships</li>
              <li className='ml-3 text-[18px] mt-4'>Careers</li>
              <li className='ml-3 text-[18px] mt-4'>Newsroom</li>
              <li className='ml-3 text-[18px] mt-4'>Advertising</li>
            </ul>
            <ul className='text-right lg:flex'>
              <li className='ml-3 text-[18px] mt-4'>Home</li>
              <li className='ml-3 text-[18px] mt-4'>Destinations</li>
              <li className='ml-3 text-[18px] mt-4'>Travel</li>
              <li className='ml-3 text-[18px] mt-4'>View</li>
              <li className='ml-3 text-[18px] mt-4'>Book</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;
  