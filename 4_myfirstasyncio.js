fs = require('fs') // filesystem module

function on_readfile_complete( err, data )
{
    if (err)
    {
        console.log("An error occurred");
        return;
    }

    console.log( data.split('\n').length - 1 );
}

fs.readFile( process.argv[2], 'utf-8', on_readfile_complete );
