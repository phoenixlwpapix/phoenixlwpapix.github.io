import { FaWeibo, FaWeixin, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-[#111] text-accent text-center py-10 text-xl">
            <a href="mailto:liangcong224@hotmail.com" className="font-bold relative text-inherit no-underline hover:text-opacity-70 group inline-block mb-8">
                liangcong224@hotmail.com
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-accent transform scale-x-0 origin-right transition-transform duration-200 group-hover:scale-x-100 group-hover:origin-left"></span>
            </a>
            <ul className="list-none flex justify-center m-0 p-0">
                <li className="mx-2">
                    <a href="https://weibo.com" target="_blank" className="p-2 hover:opacity-70 text-inherit" aria-label="Weibo"><FaWeibo /></a>
                </li>
                <li className="mx-2">
                    <a href="https://weixin.qq.com" target="_blank" className="p-2 hover:opacity-70 text-inherit" aria-label="Weixin"><FaWeixin /></a>
                </li>
                <li className="mx-2">
                    <a href="https://facebook.com" target="_blank" className="p-2 hover:opacity-70 text-inherit" aria-label="Facebook"><FaFacebook /></a>
                </li>
                <li className="mx-2">
                    <a href="https://twitter.com" target="_blank" className="p-2 hover:opacity-70 text-inherit" aria-label="Twitter"><FaTwitter /></a>
                </li>
            </ul>
        </footer>
    );
}
