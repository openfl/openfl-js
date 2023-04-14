import CompressionAlgorithm from "openfl/utils/CompressionAlgorithm";
var assert = chai.assert;


describe ("ES6 | CompressionAlgorithm", function () {
	
	
	it ("test", function () {
		
		switch (""+CompressionAlgorithm.DEFLATE) {
			
			case CompressionAlgorithm.DEFLATE:
			case CompressionAlgorithm.ZLIB:
			case CompressionAlgorithm.LZMA:
				break;
			default: //CompressionAlgorithm.GZIP:
			
		}
		
	});
	
	
});