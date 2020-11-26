export const filfoxMockData = JSON.parse(
  '[{"cid":"bafy2bzaceb2cw5y6fkucqoh4k5zo3jdu4txurma3hszmsuzlm5wkfksestohe","height":82792,"timestamp":1600790160,"from":"t1kh7xygoxawth4wzx7mfo2jb6mirb7y7wrnf45jq","to":"t021359","nonce":10,"value":"0","method":"Send","receipt":{"exitCode":0}},{"cid":"bafy2bzacedchco2ff4almriyyfsnxae2fv6xosyffy5s77y2ebqjslt4dovd2","height":82713,"timestamp":1600787790,"from":"t1kh7xygoxawth4wzx7mfo2jb6mirb7y7wrnf45jq","to":"t1nmprl3xvvzcwy5wzkwjfo4b33tc32o7mlwqxf6i","nonce":9,"value":"200000000000000000","method":"Send","receipt":{"exitCode":0}},{"cid":"bafy2bzacedydfcpydo33sqkmyrgjtzxnow4ojqcuxcwcx2ijdxo3fx7jyfud2","height":82704,"timestamp":1600787520,"from":"t1kh7xygoxawth4wzx7mfo2jb6mirb7y7wrnf45jq","to":"t1kh7xygoxawth4wzx7mfo2jb6mirb7y7wrnf45jq","nonce":8,"value":"1000000000000","method":"Send","receipt":{"exitCode":0}},{"cid":"bafy2bzacebjs7fvmfl2p5raja6a7sy4fpztxtmr2nvxd5bvjalqr3ek2b3lyq","height":82690,"timestamp":1600787100,"from":"t1kh7xygoxawth4wzx7mfo2jb6mirb7y7wrnf45jq","to":"t1kh7xygoxawth4wzx7mfo2jb6mirb7y7wrnf45jq","nonce":7,"value":"100000000000","method":"Send","receipt":{"exitCode":0}},{"cid":"bafy2bzacebjxwp6qlcgy6roewkdkzxypsqybdsoaujjjdtmbcokmvo55lktma","height":82667,"timestamp":1600786410,"from":"t1kh7xygoxawth4wzx7mfo2jb6mirb7y7wrnf45jq","to":"t1kh7xygoxawth4wzx7mfo2jb6mirb7y7wrnf45jq","nonce":6,"value":"10000000000000","method":"Send","receipt":{"exitCode":0}},{"cid":"bafy2bzacedetly3gnancwlcu7ss6rbbjoxcfitnfobdngyg5kzk4ritfr5oj2","height":81502,"timestamp":1600751460,"from":"t1kh7xygoxawth4wzx7mfo2jb6mirb7y7wrnf45jq","to":"t137sjdbgunloi7couiy4l5nc7pd6k2jmq32vizpy","nonce":5,"value":"100000000000000","method":"Send","receipt":{"exitCode":0}},{"cid":"bafy2bzacedftorx26nqankbkx3sy6bgujpsgkwppyewo6st34g7mf36zkuvi2","height":79718,"timestamp":1600697940,"from":"t1kh7xygoxawth4wzx7mfo2jb6mirb7y7wrnf45jq","to":"t021359","nonce":4,"value":"0","method":"Send","receipt":{"exitCode":0}},{"cid":"bafy2bzacedg24wp6dp2xqhip2ydz5m6utbq24spmtrawrgk7slfknuzxey52e","height":79674,"timestamp":1600696620,"from":"t1kh7xygoxawth4wzx7mfo2jb6mirb7y7wrnf45jq","to":"t021359","nonce":3,"value":"500000000000000000","method":"Send","receipt":{"exitCode":0}},{"cid":"bafy2bzacebf2hewiheocmqi3hh7arkcj6utbxyrais4cz3zlvowjjikk2fzyk","height":65291,"timestamp":1600265130,"from":"t1kh7xygoxawth4wzx7mfo2jb6mirb7y7wrnf45jq","to":"t1kh7xygoxawth4wzx7mfo2jb6mirb7y7wrnf45jq","nonce":2,"value":"10000000000000","method":"Send","receipt":{"exitCode":0}},{"cid":"bafy2bzaceccrdfkv26h6agqr3brz6f4xhbhgniy4rs3g3omr2cym6fsb5ymui","height":65281,"timestamp":1600264830,"from":"t1kh7xygoxawth4wzx7mfo2jb6mirb7y7wrnf45jq","to":"t1kh7xygoxawth4wzx7mfo2jb6mirb7y7wrnf45jq","nonce":1,"value":"100000000000000","method":"Send","receipt":{"exitCode":0}}]'
)

export const secondaryFilfoxMockData = filfoxMockData.map((msg, i) => ({
  ...msg,
  cid: msg.cid.replace(/.$/, String.fromCharCode(i))
}))