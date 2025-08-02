import React from "react";

type BlockQuoteProps = {
  quote: string;
  author: string;
};

export const BlockQuote = ({ quote, author }: BlockQuoteProps) => {
  return (
    <div className="max-w-4xl mx-auto mb-8">
      <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-800 dark:text-gray-200">
        {quote}
        <footer className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          — {author}
        </footer>
      </blockquote>
    </div>
  );
};
