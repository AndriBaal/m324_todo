(function() {
    var implementors = Object.fromEntries([["futures",[]],["futures_io",[]],["futures_util",[["impl <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.Empty.html\" title=\"struct futures_util::io::Empty\">Empty</a>"],["impl <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.Repeat.html\" title=\"struct futures_util::io::Repeat\">Repeat</a>"],["impl&lt;A, B&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"enum\" href=\"futures_util/future/enum.Either.html\" title=\"enum futures_util::future::Either\">Either</a>&lt;A, B&gt;<div class=\"where\">where\n    A: <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a>,\n    B: <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a>,</div>"],["impl&lt;R: <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a>&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.BufReader.html\" title=\"struct futures_util::io::BufReader\">BufReader</a>&lt;R&gt;"],["impl&lt;R: <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a>&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.ReadHalf.html\" title=\"struct futures_util::io::ReadHalf\">ReadHalf</a>&lt;R&gt;"],["impl&lt;R: <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a>&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.Take.html\" title=\"struct futures_util::io::Take\">Take</a>&lt;R&gt;"],["impl&lt;St&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_util/stream/struct.IntoAsyncRead.html\" title=\"struct futures_util::stream::IntoAsyncRead\">IntoAsyncRead</a>&lt;St&gt;<div class=\"where\">where\n    St: <a class=\"trait\" href=\"futures_util/stream/trait.TryStream.html\" title=\"trait futures_util::stream::TryStream\">TryStream</a>&lt;Error = <a class=\"struct\" href=\"https://doc.rust-lang.org/1.84.1/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;,\n    St::<a class=\"associatedtype\" href=\"futures_util/stream/trait.TryStream.html#associatedtype.Ok\" title=\"type futures_util::stream::TryStream::Ok\">Ok</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.u8.html\">u8</a>]&gt;,</div>"],["impl&lt;T&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.AllowStdIo.html\" title=\"struct futures_util::io::AllowStdIo\">AllowStdIo</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,</div>"],["impl&lt;T, U&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.Chain.html\" title=\"struct futures_util::io::Chain\">Chain</a>&lt;T, U&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a>,\n    U: <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a>,</div>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.84.1/std/primitive.u8.html\">u8</a>]&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.84.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.Cursor.html\" title=\"struct futures_util::io::Cursor\">Cursor</a>&lt;T&gt;"],["impl&lt;W: <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a>&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.BufWriter.html\" title=\"struct futures_util::io::BufWriter\">BufWriter</a>&lt;W&gt;"]]],["mongodb",[["impl <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"mongodb/gridfs/struct.GridFsDownloadStream.html\" title=\"struct mongodb::gridfs::GridFsDownloadStream\">GridFsDownloadStream</a>"]]],["tokio_util",[["impl&lt;T&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"tokio_util/compat/struct.Compat.html\" title=\"struct tokio_util::compat::Compat\">Compat</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"tokio/io/async_read/trait.AsyncRead.html\" title=\"trait tokio::io::async_read::AsyncRead\">AsyncRead</a>,</div>"]]]]);
    if (window.register_implementors) {
        window.register_implementors(implementors);
    } else {
        window.pending_implementors = implementors;
    }
})()
//{"start":57,"fragment_lengths":[14,18,5401,311,469]}