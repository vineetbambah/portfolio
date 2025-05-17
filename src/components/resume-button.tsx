'use client';
const ResumeButton = () => {
  const handleClick = () => {
    window.open('/resume.pdf');
  };

  return (
   <button className="p-2 border-1 rounded-full" onClick={handleClick}>
              resume
    </button>
  );
}
export default ResumeButton;