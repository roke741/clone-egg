import React, { useEffect, useState } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
//import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS, INLINES, MARKS} from "@contentful/rich-text-types";


const renderOptions = {
  renderNode: {
    [INLINES.EMBEDDED_ENTRY]: (node) => {
      if(node.data.target.sys.contentType.sys.id === 'step') {
        return <div>{node.data.target.fields.description}</div>
      }
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      return <img src={node.data.target.fields.file.url} alt={node.data.target.fields.description} />
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      
    },
    //HIPERVINCULOS
    [INLINES.HYPERLINK]: (node) => {
      if (node.data.uri.includes("youtube.com")) {
        // Extract videoId from the URL
        const match = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/.exec(
            node.data.uri
        )
        const videoId =
            match && match[7].length === 11 ? match[7] : null
        return (
            videoId && (
              <iframe
              className="w-full min-h-80 rounded-md"
              title={`https://youtube.com/embed/${videoId}`}
              src={`https://youtube.com/embed/${videoId}`}
              
              />    
            )
        )
    }
    }
  },
  renderMark: {
    [MARKS.CODE]: text => {
      return (
        <pre className='bg-[#003750] p-7 my-3 rounded-md text-white'>
          <code>
            <code className='whitespace-pre-wrap font-monospace text-[14px]'>{text}</code>
          </code>
        </pre>
      );
    }
  },

};

function Content({idContent, subtitle}) {

  const [json, setJson] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (idContent) {
      const getContent = async () => {
        try {
          const response = await fetch(`/lecciones/Leccion_${idContent}.json`);
          const data = await response.json();
          setJson(data);
          setIsLoading(true);
        } catch (error) {
          console.error('Error fetching content:', error);
        }
      };
      getContent();
    }
  }, [idContent]);



  return (
    <div className='mb-20 px-16 py-6 lg:px-32 lg:py-12 rounded-2xl bg-white'>
      <h1 className='text-2xl font-bold m-0'>{subtitle}</h1>
        <>
          { isLoading && documentToReactComponents(json.data.step.description, renderOptions)}
        </>
    </div>
  );
}

export default Content;