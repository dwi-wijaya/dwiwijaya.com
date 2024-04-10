

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

const MDEditorPreview = dynamic(
    () => import("@uiw/react-markdown-preview").then((module) => module.default),
    { ssr: false }
);

const DetailPortfolio = ({ portfolio }) => {

    console.log(portfolio);
    return (
        <div className=''>
            <h1 className='text-2xl font-medium'>{portfolio.name}</h1>
            <p>{portfolio.excerpt}</p>
            <hr className="hr" />

                <div className="flex item-center gap-2">
                    {portfolio.demoLink &&
                        <a href={portfolio.demoLink} className="badge">
                            <i className='bx bx-link-external'></i> Live Demo
                        </a>
                    }
                    {portfolio.githubLink &&
                    <a href={portfolio.githubLink} className={`badge`}>
                        <i className='bx bxl-github'></i> Source Code
                    </a>
                    }
                </div>

                <Image alt={portfolio.name} src={portfolio.thumbnail} width={0}
                    height={0}
                    sizes="100vw"
                    className='mt-5 rounded-md'
                    style={{ width: '100%', height: 'auto' }}
                />
            <hr className='hr' />
            <div className='flex gap-2 items-center mb-4' >
                {portfolio.skill.map((skill, index) => (
                    <span className="badge" key={skill.index}>
                        <i
                            className="text-xl"
                            dangerouslySetInnerHTML={{ __html: skill.icon }}
                        /> {skill.name}
                    </span>
                ))}
            </div>
            <MDEditorPreview
                source={portfolio.content}
                className="md:p-4 rounded-lg"
            />
        </div>
    )
}

export default DetailPortfolio