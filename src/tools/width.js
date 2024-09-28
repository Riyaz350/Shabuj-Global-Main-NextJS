'use client'
import { useEffect } from "react";
import { useState } from "react";

const width = () => {
    const [width, setWidth] = useState(null);
    useEffect(() => {
      setWidth(window.innerWidth);
    }, []);
    return width
};

export default width;