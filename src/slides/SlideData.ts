import React, { ReactNode } from 'react';

interface SlideData {
    name: string;
    category:string;
    title: string;
    time: string;
    description: string;
    content: ReactNode;
}

export default SlideData;