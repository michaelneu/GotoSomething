window.files = [
    {
        "content": "\\chapter{1}\n\n    \\section{1.1}\n        look for this\n    \\section{1.2}\n        and this\n\n\\chapter{2} \\section{2.1}\n    also this\n",
        "name": "01.tex"
    },
    {
        "content": "% \\chapter{dead chapter} should not appear\n\nalso i'm looking for this (previous file)\n\n\\chapter{3}\n    % \\subsection{3.1}\n        and this\n\n\\chapter{4}\n",
        "name": "02.tex"
    } 
];
