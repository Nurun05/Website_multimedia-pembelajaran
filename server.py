import http.server
import socketserver
import webbrowser
import socket
import os
import sys

# Pindah ke direktori tempat berkas server.py berada
os.chdir(os.path.dirname(os.path.abspath(__file__)))

def get_local_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        return "127.0.0.1"

class ReusableTCPServer(socketserver.TCPServer):
    allow_reuse_address = True

class CustomHTTPHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Mencegah browser melakukan caching berlebih selama tahap pengujian
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

def run_server():
    local_ip = get_local_ip()
    ports_to_try = [8000, 8080, 8888, 3000, 5000]
    
    for port in ports_to_try:
        try:
            httpd = ReusableTCPServer(("", port), CustomHTTPHandler)
            print("=" * 65, flush=True)
            print("  SERVER LOKAL MEDIA PEMBELAJARAN INTERAKTIF BERJALAN!", flush=True)
            print("  Materi: Keanekaragaman Hayati Indonesia (IPA SMP Kelas VII)", flush=True)
            print("=" * 65, flush=True)
            print(f"  👉 Akses di Laptop/PC      : http://localhost:{port}", flush=True)
            print(f"  👉 Akses di HP (Jaringan Sama): http://{local_ip}:{port}", flush=True)
            print("=" * 65, flush=True)
            print("  Tekan Ctrl + C di terminal untuk menghentikan server.", flush=True)
            print("=" * 65, flush=True)

            if "--open" in sys.argv:
                webbrowser.open(f"http://localhost:{port}")

            httpd.serve_forever()
            break
        except OSError as e:
            if e.errno == 10048 or "Address already in use" in str(e):
                continue
            else:
                print(f"Error pada port {port}: {e}", flush=True)

if __name__ == "__main__":
    run_server()
