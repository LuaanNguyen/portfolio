import { IoCloudDownloadOutline } from "react-icons/io5";

interface ButtonProps {
  name: string;
}

export default function NavButton({ name }: ButtonProps) {
  return (
    <a
      href="https://www.google.com/search?sca_esv=952fdb03796c5895&udm=2&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIemkjk18Cn72Gp24fGkjjh6xc8y8oU3IJovU34XDyOFvE0X8cOr8Z_8IAmr4gJetqjLcq9TS-FbodE2o26UfJ0smxVEOKA8L3Fu9P36lGwCBsf06KzS0kHnk8m7Hgh5T3l-iPEn3NpJVgkpjbnn0UApEOto-FYKf3xCDNXSxbk1tqSsIl7w&q=cute+cats&sa=X&sqi=2&ved=2ahUKEwjWw-Tp-YqPAxWKIkQIHbqBF6YQtKgLegQIDRAB&biw=1908&bih=1396&dpr=0.9"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button
        type="button"
        className="flex items-center text-md px-4 py-3 rounded-full bg-spotify-green  font-semibold hover:bg-spotify-dark-green gap-2"
      >
        {name}
        <IoCloudDownloadOutline className="text-xl" />
      </button>
    </a>
  );
}
