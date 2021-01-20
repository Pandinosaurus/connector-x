(function() {var implementors = {};
implementors["mio"] = [{"text":"impl AsRawFd for Poll","synthetic":false,"types":[]},{"text":"impl AsRawFd for Registry","synthetic":false,"types":[]},{"text":"impl AsRawFd for Sender","synthetic":false,"types":[]},{"text":"impl AsRawFd for Receiver","synthetic":false,"types":[]},{"text":"impl AsRawFd for TcpListener","synthetic":false,"types":[]},{"text":"impl AsRawFd for TcpSocket","synthetic":false,"types":[]},{"text":"impl AsRawFd for TcpStream","synthetic":false,"types":[]},{"text":"impl AsRawFd for UdpSocket","synthetic":false,"types":[]},{"text":"impl AsRawFd for UnixDatagram","synthetic":false,"types":[]},{"text":"impl AsRawFd for UnixListener","synthetic":false,"types":[]},{"text":"impl AsRawFd for UnixStream","synthetic":false,"types":[]}];
implementors["socket2"] = [{"text":"impl AsRawFd for Socket","synthetic":false,"types":[]}];
implementors["tokio"] = [{"text":"impl&lt;T:&nbsp;AsRawFd&gt; AsRawFd for AsyncFd&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl AsRawFd for TcpListener","synthetic":false,"types":[]},{"text":"impl AsRawFd for TcpSocket","synthetic":false,"types":[]},{"text":"impl AsRawFd for TcpStream","synthetic":false,"types":[]},{"text":"impl AsRawFd for UdpSocket","synthetic":false,"types":[]},{"text":"impl AsRawFd for UnixDatagram","synthetic":false,"types":[]},{"text":"impl AsRawFd for UnixListener","synthetic":false,"types":[]},{"text":"impl AsRawFd for UnixStream","synthetic":false,"types":[]},{"text":"impl AsRawFd for ChildStdin","synthetic":false,"types":[]},{"text":"impl AsRawFd for ChildStdout","synthetic":false,"types":[]},{"text":"impl AsRawFd for ChildStderr","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()