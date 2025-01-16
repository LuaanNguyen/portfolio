import { IoCloudDownloadOutline } from "react-icons/io5";

interface ButtonProps {
  name: string;
}

export default function NavButton({ name }: ButtonProps) {
  return (
    <a
      href="https://www.google.com/search?q=cute+cat&sca_esv=865d6c36e0c51f09&udm=2&biw=1720&bih=1273&ei=AHCJZ9fXM-DIkPIPkMnS0Ac&ved=0ahUKEwjX16OKjvuKAxVgJEQIHZCkFHoQ4dUDCBE&uact=5&oq=cute+cat&gs_lp=EgNpbWciCGN1dGUgY2F0Mg0QABiABBixAxhDGIoFMg0QABiABBixAxhDGIoFMg0QABiABBixAxhDGIoFMggQABiABBixAzINEAAYgAQYsQMYQxiKBTIIEAAYgAQYsQMyDRAAGIAEGLEDGEMYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigVI-wtQ0gNYggtwAngAkAEAmAGyAqABigyqAQcyLjIuMi4yuAEDyAEA-AEBmAIJoAKbDKgCAMICBhAAGAcYHpgDAYgGAZIHBzMuMi4yLjKgB-8o&sclient=img"
      target="_blank"
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
