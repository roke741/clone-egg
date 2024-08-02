import React, { useEffect, useState } from 'react';
//import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

function Content({idContent, subtitle}) {
  const [contentHtml, setContentHtml] = useState('');

  useEffect(() => {
    const getContent = async () => {
      try {
        const response = await fetch(`/lecciones/Leccion_${idContent}.json`);
        const json = await response.json();
        const options = {
          renderNode: {
            "embedded-entry-inline": (node) => {
              const target = node.data.target;
              if (target.sys.contentType.sys.id === "step") {
                const description = target.fields.description || "";
                return documentToHtmlString(description, options);
              }

              return `<div>Unsupported entry type: ${target.sys.contentType.sys.id}</div>`;
            },
            'embedded-entry-block': (node) => {
            },
          },
        }
        const htmlString = documentToHtmlString(json.data.step.description, options);
        setContentHtml(htmlString);
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };
    getContent();
  }, [idContent]);

  return (
    <div className='mb-20 px-16 py-6 lg:px-32 lg:py-12 rounded-2xl bg-white'>
      <h1 className='text-2xl font-bold m-0'>{subtitle}</h1>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
}

export default Content;