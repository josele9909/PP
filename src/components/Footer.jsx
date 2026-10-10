import logo from "/logo.svg";
import React from "react";
import {BlogLinkData, GithubLinkData, LinkedInLinkData,} from "@/content/contactLinks.jsx";
import {AnimatedLinkIcon} from "@/components/AnimatedLinkIcon.jsx";

const Footer = () => {
    return (<footer className="bg-gray-900 text-white pt-16 pb-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
                <img
                    alt="logo"
                    className=" h-40  object-cover shadow-2xl mb-4"
                    src={logo}
                />
                <p className="text-gray-300 text-sm">Passionate web developer seeking opportunities in Japan. Let's build something amazing together.</p>
                <p className="text-gray-400 text-xs mt-2">日本でのキャリアを築きたい、情熱的なウェブ開発者です。共に素晴らしいものを創り上げましょう。</p>
            </div>
            <div>
                <h4 className="font-semibold text-lg text-white mb-4">Quick Links</h4>
                <ul className="space-y-2">
                    <li><a href="#hero" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                    <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                    <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
                    <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold text-lg text-white mb-4">Connect</h4>
                <div className="flex justify-center md:justify-start space-x-4">
                    <AnimatedLinkIcon { ...GithubLinkData } className={"text-gray-400 hover:text-white transition-colors"} />
                    <AnimatedLinkIcon { ...LinkedInLinkData } className={"text-gray-400 hover:text-white transition-colors"} />
                    <AnimatedLinkIcon { ...BlogLinkData } className={"text-gray-400 hover:text-white transition-colors"} />
                </div>
            </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p className="text-gray-300">© {new Date().getFullYear()} Genji Tanaka (田中源氏). Built with passion for Japan.</p>
            <p className="text-gray-400 mt-1">日本への情熱を込めて作られました。</p>
            <p>this is dev2</p>
        </div>
    </footer>)
}

export default Footer;