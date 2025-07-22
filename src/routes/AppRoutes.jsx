import { Routes, Route } from 'react-router-dom';
import Home from './../components/home/home';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
  )
}
