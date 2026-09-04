# -*- coding: utf-8 -*-
import http.server
import socketserver
import webbrowser
import os

PORT = int(os.environ.get("PORT", 3030))
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

if __name__ == '__main__':
    print(f'Starting NALR ST-1 MCQ Revision Platform on http://localhost:{PORT}...')
    if 'PORT' not in os.environ:
        try:
            webbrowser.open(f'http://localhost:{PORT}')
        except Exception:
            pass

    with socketserver.TCPServer(('', PORT), Handler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print('Server stopped.')
