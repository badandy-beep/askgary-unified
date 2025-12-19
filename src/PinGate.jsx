import React, { useState } from 'react';

// ============================================================
// PART 1: PIN GATE ONLY
// Passcode: STOPAUTISM
// After approval, Part 2 will add intro slides
// ============================================================

const noeticLogoBase64 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAAAAAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMCwsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/wAALCAGQAZABAREA/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/9oACAEBAAA/APyooorQi0m6ewW8ZoIoXfy4TNOsZmcDJSME5c+wBIqG1sbi8WSSOPMMQzLM7BYYQSP3kjHCqMjqe4qlfabcaXdyW1zGYriM4dOCVOMgjIwQRyDVSiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiitK3k8J/ZINmsaib3acXC+H7f7Pu9fL+04bpxnHPHpQLP4eHP2nWfEIbH+ri0C12k+hJu/lHuAc+9M/tP4bc/8UT4k6f8AQzW3Of8AuF0//g0+FP8AoSfFH/hS23/yLR/wm/wp/wChJ8Uf+FLbf/ItH/Cb/Cn/AKEnxR/4Utt/8i0f8Jv8Kf8AoSfFH/hS23/yLR/wm/wp/wChJ8Uf+FLbf/ItH/Cb/Cn/AKEnxR/4Utt/8i0f8Jv8Kf8AoSfFH/hS23/yLR/wm/wp/wChJ8Uf+FLbf/ItH/Cb/Cn/AKEnxR/4Utt/8i0f8Jv8Kf8AoSfFH/hS23/yLR/wm/wp/wChJ8Uf+FLbf/ItH/Cb/Cn/AKEnxR/4Utt/8i1o6bqXw3uLlU1Lw74ms7Ng26e28Q28sqkD+FJLIR59MuM9wKr+KfD/AMLrnSG1LwlqXiE3Fu+ZbHV7C3gWdCPlKSQTSFGHfcCuD1B5x/DGjeAdRnuF1/xFq+iwqB5UtnpMN+0hP8LK9zCF68EE9ORzWRqXwl0t7s2ukeNbO+ulDtbWuoeHdQsLicrneI0MZQsF5xvyRkkFQTWTe/C7xPpVhJeX2nGytUYRtcTXMCRZJUAAl8E5YcDPbsQTzVFFFFFFFFFFFFdno3hCyuNGt77V9W/s/7W7paQQ2clzNMUbY7ERj5EViMM2CcMcFVYiW68FQJJJB/bsIvYNKk1C7t59IvrdYdpYIkcksSxzPIVOEQ4HBYqCM87RRRRRRRRRRRRRXYweIfD3h+3t49F0r+0bweXJc6pqPmeTHKjBxHbWxMR2BlX943mbwThQCrDO8S+LtQ8Saol7dFEMdtFaQxQR7I4oY0VURFycABRnkkkkknJJxKKKKKKKK3NLuBc+H9ZsNhL2Qt9WV8cLFI/2SYH1JkeDaPSN/zofh/I0fjTREXJNxdrZNg8FbgfZ2z7bJG/OuioooooooooooroT4Taz8PtrWo3McF1BO0NvYFBJPdbSCYdzgLHENxZ2BbC4CkuFrkqKKKKKKKK0oI9A+wQNNeX51Js+fDHaRm1QZ48uYy73OM8mNcZ4weoc2Pwnz8via6x/wBSfa5/9KKt/wDCDaD/AND74s/8Iu2/+Sqf/wAINov/AEPnjH/wira/+SqP+EG0X/ofPGP/AIRVt/8AJVH/AAg2i/8AQ+eMf/CKtv8A5Ko/4QbRf+h88Y/+EVbf/JVH/CDaL/0PnjH/AMIq2/8Akqj/AIQbRf8AofPGP/hFW3/yVR/wg2i/9D54x/8ACKtv/kqj/hBtF/6Hzxj/AOEVbf8AyVR/wg2i/wDQ+eMf/CKtv/kqj/hBtF/6Hzxj/wCEVbf/ACVR/wAINov/AEPnjH/wira/+Sqst4S8LI6Rn4heJPN6bofDtrLCT2JY3gIHchefQ+s66s4NOQ+H/EC+JfK1P7MsFsli1r9j2P5hJkkkyxZGCeS2TuBXgZzaKKKKKKKKK9K8K+Ko9N8JXVsksf8Aalspu9LulYN9km3BXhYZybWcKokH8DKJF6vXmtFdh8Pv3M3ii5x89v4b1B0OOjGPyx/6Hrpr2SSzijhil01LOWISyWUNi7orqykW7Qs+I8xdN+7cIlD7sKIue0/xmsd3ALfUotTlvQ12fKghsZYJp5QgdrqIxo0gAUbGLb8qC2QiqnL0UUUUUUUVv6C+hSZGrwatIBDIYxYXMMJMxXEWS8bhk3YJOCSMdAeHav4g8OpaQSaT4f1VLwSMZLfU9ThkhkTAwvmJbh0Bzu3LnJIwRxmHRfFWsaOJYoJ1mtJ12z2V0gmtph6SRNlW+p5HY8ij/hKNX/4Zr4P/APBC3/xdH/CUav8A9C14P/8ABC3/AMXR/wAJRq//AELXg/8A8ELf/F0f8JRq/wD0LXg//wAELf8AxdH/AAlGr/8AQteD/wDwQt/8XR/wlGr/APQteD//AAQt/wDF0f8ACUav/wBC14P/APBC3/xdH/CUav8A9C14P/8ABC3/AMXR/wAJRq//AELXg/8A8ELf/F0f8JRq/wD0LXg//wAELf8AxdH/AAlGr/8AQteD/wDwQt/8XRJ4q1iW3uIB/Y8UNwApktdEtLaQBTkANHCrgZ64PNY9FFFFFFFFeyfCTSVuND1/UZLbzAbm20gmT+GB5nvHbj/p4FluY9ixYDr0FxH4fvriKGZYFe2nl2LOl5btb4wwb98shRVUqQS+CvB+UkjkqKKKKKKKK19EtbZ7LWdRu4TcR6faiOC2EhQT3M0qwxBivzKi5eQkEHMQUkBiRg0UUUUUUUUUUUUUUUUUUUUUUUUUUUV6h8Kmji0j4l3bHJj8HXEa/WW7s4sZ+gY/hX3x4B8TzeCtLPiFYJJJNMCXkMaZ3PKGVoV/4E4H0J6HIr6U0XxJpvjLRNI1nSbiO50u/hSe1mYKFmjIyo6ZU+o4IPNfmD+1B4ctR+0n4/+w2sdlaWupvdCGIYjhO0SMqjoFDkgewHpXlNFFFFFFFSxW9xcRTSwwSSxwIJJniQssSEhQzEfdUllGT1JA6mu0+F3hG68aeM7PT4o5ngWRXvJYlYmG3DLvkJUgAYPGcZYqOpFe5+CfAfhm1vpdS0O0+2NBdy2moaPeSyGG7s2I8u5TkOI5A3MfBQqW+TIYdV448N2vi7wdrOgSTy2yapZy2hnjALxeYhUsAeuM9K/H74xfDOT4beKI4RMs+nX8RvLKVmZZTGHZWjlQn93MjAgrkhs78AADk/DOi3fiLxFZaTp6rJeXcoht43YKGlYgICTwAWIySe/NdF478LDwl4gNhHdm9spYIby0u2jEZuLeaJZY32jgEo4yBxu3DJAya6DQdGXU/hD411Fot8+mX2gCFgvKieW9jcZ+scY/wCB0fZYNU8S+MtNmTdDJpl9axH/AKa/2HqIRh6EMqsD2IBrvvhz8MrH4e/C/wAFy63Zaa2s6nocNxKbiJJXTzI8mMb+MjqQSFJIJGQK4/4V6PY69ql5Z6jaJe2p0/UiYpBlS40+4kU/irKfoRxTPhLodhrvjB9P1Sxg1CxfT9QdrW5QPG7pZTyISp4JDIK4Oiiiiiiiug8IeH7rxb4r0jw/YsqXup3cVnA0nKq0jhATjsCRxXqvhfxPeeEvJt9UNrLp99qf2nUr26tYnuooRplwmLZnQtCJHKK5jKsyjGa5HxjqPhnVfEl5e+FdMvNI0l5FIsbx43MCsihgm9WbchJO0uSQD6AAdF+zZLAnx2+H3nFREniLSyxbpg3cXb2657dq/pI0PxRoPiGyi1HQtVtr60khSUSwMCFVsYLYOUB/2sV4B+0D4o0z4lfsT/FrWNHT/R2t4opIZAFlt5E1izE0Em3gOpJBx1GDgZr4TorD8S+INO8J6BNq2qt5dlC8aPIELbd7qgJA54LDOOa29E1F/EXhC7tbCNoLbVU+xzrdCH7PNIUJWGVtwKoZFVQ4J/1gbBAbHl/iTwlqHhK7it79oGE8KXNvLbyrJHcQv92SNh95T9DxhgCMGsKiiiiiiuu8BT2dpoHji5utMhvhB4flupI5/mjjdL+y8px3BVixIPQ8g1keHdduNIvNPhgkCXBmEttPgB7WU43Mn8wyP8ApXJUUUUUUUUVJb289zcJb20MlxO52pFChZ2PoAOTXpGjeBdP0XxT4etPFT7bnVZ4IptMjyLiyUhhP8/3RMCQBsYgDkN1B8+8RaZb6P4g1HTrOZ57S2maKGWQYZ1BxuI7ZGDj+lZVFFFFFF7V9CfDfwBYX3hm2u3it59Vu3+1WsiMBLb6YFDQz7e3mykMGOcxKuOMNXnnjjwxb6Br/kWJd9JuokvNNlkILPbSglMkAfMpDRt7x1y9FFFaWlXdpYrcwXWkWuoJdQmGSOfzE8s5B3oUYYkXG5TkjPb7woooooqS3t5rq6itoELTyyLHGgHViTgD86yfEujf2B4i1PRzcC5GnXc1n54Tb5vlOULYycZ29+a9X0X4RaL4h8E+G7pdSjs9W1ixlMlnPD/x5OJZcQxbMn92iIhZmJJDZJ4x478TtWluvG2oabOmy20UjTLCPOTFCkaxKSf4meNHdv8Abo5z074r0z4a+NLXwddzJd+HdF1+OS2mgL6rbec0G9SodDuGGGcj07152i+EP+Fo3lxLo9ha+GdQS7trdLbyJBYoJHNiYzGCUMaIrOQQ4B+XPyrw/hqzXWda0PRmk8lb29t7EzY+5vdU3fjnP0pPhBoFvr/xZ0Cwuvmge6Ezxn/lpHCplZP+BbMfjXv9/q3iDRfEFjZwtp0qadrdpaaTe2dqLcXdpJdxwLBPsB3ygyxqWI3bhuG7AYcT+0J4d03RPE1pqumrHC2qvNPcWsaALDIJnDKFGQm/5ZCoIB3EAKcY81ooooooooroYr/R7fwpJbyaTJJq080Lx3klzIBFCkmSoiB2HzE64LnHvxXPUUUUUUUUUUUU+CCS5uIreFC8srrGijqzE4A/M19S+BvBtl4W0qO3ijUXxhT7dM2C7y44GRkhBnCrnAyTyzO/J+J/D2i+EW0Sfwtr8muNcwxS3L3GlS2rxQuikKPMzkk7htIA3dT2rtvh54fsvFfjj+zNXgNxpkcE91NAJCgmS3hknKZHI3eXg4weRX0O/wALfAV9GW1HwdoU10f9a02mRNvPqx24OfrXjvxK+Bw8OWMmq+F3lvNLjjRrizl+a5gySBKG/wCWigDcSfmUcnd0Xwzwr4xsPEmpyaDNZS6Pr8Y3GwutrbgPvSQyj5ZVHfow4yOc9LqWn6j4d1hrHVLYQz7Y5RtkWRJI3UOjxupIZGBBDA18beCPC1z4y8a6V4etCU+3TxwmYLnyUz87499qgnHtX2A/gDwfYxJp66HY3FvYlLWG3vrdLhUC4XAVwRkAABumBjAGBXC+Pvgfp1xp9xf+ChHp86MzjR5gVgnJ6bGztiJ5PzZi5H3BX59XUUUU9xJDIskcqMUdHUhkZTggg9CDVG6u7vULhrnULi4vrlxhprmUyyN9WYkn8TUNFFFaOl+I9d0Ox1C00jW9TsLTU4xDeW9neSwxXSDJ2SqjASLySAcjmsp3aRy7sWdjlmYkknuTTaKKKKKKKKKKKK9Y8F+IPC1h4C1OxvIbZdbks3igupIQzR3DyR7WEhB8sRwl9oCkPJIpc7dpHk9FFFFFFFFe8fs3+IrHw/4rv7LVjGLLU4FBLH5VljLbOTwN4Z1yeAc15/8AFjRtP8OfEjWNO0m3Ftp8MsRtrZGJ+zq0KMYyTydpYgZycV0HwL0yy1f4laRb6nbRT2J82aaGY4WQRwSyBSf4csmM9s5PGa+gbb4r+CtfuorLxVoF1aTQRjyxqFl9pVm6qWkjKzFVydoO9vlGdpwvzt8VfhtH4IuLSfT1nfSbuPKyzrh1mGd0ZPRyoC4cfeDAkKcY6v4C/DS7+IHiSKK8t2h0WAl726kTK7ASu2M4OJGIwMg7R8xHQHv/AA/oWm+HNPWx0q0S2txyzLy0jd2Zj8zHjqTnAAHAAPJftLfDH/hOPA7arpltvOu2Ma21sACDcxhniHPGGA/M4r7v/Zz+JNt8UPhHpurCRRqlouLm19M/dkH+y4zj0OR2r1R1V0KsoZT1BGQRX5M/tu/DqDwX8S49ctYFhs9fhN0U7faFOJsj32lT77q+bKKKKKKKKKKKKKK+/NHfTPFn7HXi3RV02GO+0SzuNUF7LbiGRrgKGQMpGNjR7VBHbIByK+A6KKKKKKKKKKKK9X+CPirRND8R3Vh4gjtxp2oCGNLi4QLHBMjkq+7IClgzJknqVHcVzXxB1aHVPGV9NaSJNbQLHY21xHjZcRQRrEs49d4QOSeCWI6CuYooooooorc8K3djpmqQ6vqUfmrp7LdW1tzhbpHDREjHKgt5gwQT5f1r0/xB4r0Dxwlve6/HN4Z8QqQs93abo4Lwcff2jMTDdncuYypB4yF8O1rR7/QNRa01G2kt50xgOOJF7Mh6Op9RxR4f13U/C+s2msaPdvZ6jaOJLe4i+8jfqCDwQQCGBBAIFfpF8CvGll8cLHX9SsLSTTdR8M6vNYSWLQhJAQ+1xIFJCkI0bKVP+sPYDHzf+15+y7N4MudY8c+DdPabQJWkvNV0+BiTp75LSTRqDzC2SxA+5yfu9PhGvRNJ0w6noGs+MbuMjSNLaOK3VhjfdyJuRR6+WmHce/lj7wr5+orqfC2j2gu/7Z18SJ4etmwIou+ozD/AJZxdwB/G/QdAC3Sn+Lte/tXUfL09Ft9Dsc2+mWsY2pFCvQgDozdWPfgfdVQOboooooooooopro0bqyMVYHIIOCK++fgj8M/Dnxh+EXibS9cjniN14kE1pdWrAT27tYWEyOpIIODESpByGDDpX5q+IvDuseE9cudH17Trqx1GFtklvcRlGU4z0PY9j0Pc1i0UUUUUUUUUV6V4F+M2reGraLTddgPiLSYQEhE0pS6t1HRYps8qP7rhh2BUcDI8R+ItV8UXSTajMjrCP3NrBEsUFuv92OMfKo/PPoAK5uiiiiiiinISrBgSCDkEHpXtXhH4k6b4iWKx8axNdynC2+v28YN3D2Hmg/64e+Q/T7wwPGvEun6Pp3iC5s9B1SXVbBNu27mtzAWJUFhsJJwCSM545HXiuir234a/tD+MvhxBDp9pdJqmiRqFXTr9t8cY7iPGGj/AAOPUGvsD4dftn/DnxdBBY+JdXj8G6qfke01SQpatkeUhkYBT0B+YJz3NeK/tT/FLwp4/sPCdv4O1SHUNPtJr+ae7t8PFLKfJUKrjhgAueMjpznj5soor0Hw18P7HXdI/tM+K9I0aEjDwah56yjJxgFYypPoSwGPfGOj/wCFYeG//ih/A/8A4N7r/wCR6P8AhWHhv/4ofwP/AODe6/8Akej/AIVh4b/+KH8D/wDg3uv/AJHo/wCFYeG//ih/A/8A4N7r/wCR6P8AhWHhv/4ofwP/AODe6/8Akej/AIVh4b/+KH8D/wDg3uv/AJHo/wCFYeG//ih/A/8A4N7r/wCR6P8AhWHhv/4ofwP/AODe6/8Akej/AIVh4b/+KH8D/wDg3uv/AJHo/wCFYeG//ih/A/8A4N7r/wCR6P8AhWHhv/4ofwP/AODe6/8Akej/AIVh4b/+KH8D/wDg3uv/AJHo/wCFYeG//ih/A/8A4N7r/wCR6qXngPwcIJTH8MfBQcIxUvq10yg44yPsxJH0I+ornP8AhUL/APRAPhT/AODe7/8Akqj/AIVC/wD0QD4U/wDg3u//AJKo/wCFQv8A9EA+FP8A4N7v/wCSqP8AhUL/APRAP/5a93/8lVBN8JZoLeWZvhD8L9sSM5A13UMnAycf6LWJ/wAKhf8A6IB8Kf8Awb3f/wAlUf8ACoX/AOiAfCn/AMG93/8AJVH/AAqF/wDogHwp/wDBvd//ACVR/wAKhf8A6IB8Kf8Awb3f/wAlUf8ACoX/AOiAfCn/AMG93/8AJVH/AAqF/wDogHwp/wDBvd//ACVR/wAKhf8A6IB8Kf8Awb3f/wAlUf8ACoX/AOiAfCn/AMG93/8AJVH/AAqF/wDogHwp/wDBvd//ACVR/wAKhf8A6IB8Kf8Awb3f/wAlUf8ACoX/AOiAfCn/AMG93/8AJVH/AAqF/wDogHwp/wDBvd//ACVS/wDCoX/6IB8Kf/Bvd/8AyVUkfwilubW5uY/gz8LzDbGMTyf25egxhyQhP+i9CQef/r0f8Khf/ogHwp/8G93/APJVZetfCGew0W91O3+EHwwv7iyt5LlbKHVrxpLjy1LGNAbYLuYDAycZ70UUV9J6H4k0L4b/ALI/hXXtZtUvfFXipDJpukRSgTCCK4l/0iVQdygkQiMFTyhB5HHzre6D4qvdRudQv/CmsXl5cyNLLcT6fMzuzHLMWK5JJ5zXTeC/2ePid43tVutK8HX4s3A2X1+RZW0gJxlHlKhx7rkenNeuaH/wT78bXFur6z4r8NabMRzHarPdgH08wLF+lecfED9i/wCK/hHT59RsNKtfE9jCDu/seUtcE9gsDqrux7Bd2cjGa+fK2tH8O6prPlNa2cqQzHbDeXUTRWzHsRLJ8mR3wee2a0P+EE1f/oW9T/8ABdL/APE0f8IJq/8A0Lep/wDgul/+Jo/4QTV/+hb1P/wXS/8AxNH/AAgmr/8AQt6n/wCC6X/4mj/hBNX/AOhb1P8A8F0v/wATR/wgmr/9C3qf/gul/wDiaP8AhBNX/wChb1P/AMF0v/xNH/CCav8A9C3qf/gul/8AiaP+EE1f/oW9T/8ABdL/APE0f8IJq/8A0Lep/wDgul/+Jo/4QTV/+hb1P/wXS/8AxNH/AAgmr/8AQt6n/wCC6X/4mj/hBNX/AOhb1P8A8F0v/wATR/wgmr/9C3qf/gul/wDiaP8AhBNX/wChb1P/AMF0v/xNH/CCav8A9C3qf/gul/8AiaiuPh14ltbaa4m0HUYreNGkkla0kVUUDJYkjAAHOTWHq2haloN1FZ6xp9zY3bwrcLBdRGOQRsWCtgnOCVYZ/wBk+lJRRRXa+EPGUGm2raZr1vLe6SWzCbdwtzYseuwnhoyedhPuGFT+MPAmo2thJq+h3FrrXh2NhIuoWnMlqg5/foDmIY5JOR6g9PNqKKKKKKKKKKKKKK1/C/8AyNmif9f8H/oxK9LuLuO3tYp5rhBqU8OyNGfE20SMVaJQeTu9ec/SuT1f/hBby/nm8Nanruhau0hcafeQ/bYXbOeCIhIgz0GHAGMn7x5+48b3mn3DQ6x4O0e8Cn5jZSywRSevDNKp/wC+c1kXHxCspJC+neCNG0w9BDe3M19ge+4xhvyrw7x/c6XqHjbV7zQY44tHmuvMs44VC+WrYOCBwDyTgdM9q66xnh1bSbHU7VxJaXttFeW7jOJI5EWRGznuGHX1rU0XT7vWdXs9Mslzd3cywQ7un7xtoJ9hnP0FbmpfCnXNDvzZazf+HtNv1RZPsd5rsKXChhlCY/vYPqKpN8PPEykg6DJ34+2Qf/F15b4qsoNM8V6xYWkJhtLXULiGGLcW2RpKyquT1IAHJpFFFFFSQyNDMkyZBRg4I7EHNFFFFFFFFFFFFFFFFTWzzRXsE0Ksty08bxbBuIkDgpgd87sYr2nxlqGiSasG8QWfiH4f6+u4rc6Vfve2MrY+8RcMJI+eP9cw5PJ7ckf+EG8C/wDRZ/8Aym3P/wAh0f8ACDeAv+i0/wDlNuf/AJDo/wCEG8Bf9Fp/8ptz/wDIdH/CDeAv+i0/+U25/wDkOj/hBvAX/Raf/Kbc/wDyHR/wg3gL/otP/lNuf/kOj/hBvAX/AEWn/wAptz/8h0f8IN4C/wCi0/8AlNuf/kOj/hBvAX/Raf8Aym3P/wAh0f8ACDeAv+i0/wDlNuf/AJDo/wCEG8Bf9Fp/8ptz/wDIdH/CDeAv+i0/+U25/wDkOj/hBvAX/Raf/Kbc/wDyHR/wg3gL/otP/lNuf/kOj/hBvAX/AEWn/wAptz/8h1G/g3wFFF5snxck8tf7/h+5xR/wjHw5H/NWj/4T9z/8h0f8Ix8Of+itH/wn7n/5Do/4Rj4c/wDRWj/4T9z/APIddR4Hs/hpF4h3+CfHet6xrQtboJaXmnvAGhNtL55EjQKqlYBK4JOcpxk4rgKKKKK6E+E2s/D7a1qNzHBdQTtDb2BQST3W0gmGcnA2xDcWdgWwuApLha5KiiiiiiipLe3muri3t4ELzTyLFGg6szHAH5mvpi9t7vS7q2sdWsZbK/+zRSXFnKMPC7xqzK3GNwJwecg57V5N4u13+3dciuIY/s+mWVtFp+nWvHkWsCL8icfxH95Ix4Lu3XjHNUUUV65+zhPDD8VbBp5FiX7HeqXkYKoP2O4ABJPc8Y9cV+o+vaJ4Y8WWCW2v+HtJ8QWMZMsKahYR3sadflWRSD9QAfWvz5/bD8AeCvhzrHhWx8FaDFotvf2l5NdW8NzLMkjRzRKnLu2CBK3B9a+b6KKKKKKKKKKKKKKKK9D+FMdpJqesLeWEWofuIxDDc2z3MME/nbYJZYlBMiqxbCjkNhsqVzXLeIjpJ8SamujWlxYaULqQWdpeTK89vCWOwSMOCwGASO+e3Sseivpb4KfATwn8TPA0mv674/1DQruK8ltIrC20pb6Dajqquzea0bOzoQSuAFYYJyTX0Ton7M/wt8Y28Y+EfxY1W91dceVpmvafHDNKccI0lrKqqSOMmQ89ia3v+GXficw/wCKa+C//hXa/wD8s6P+GXfid/0Dfgv/AOFdr/8Ayzo/4Zd+J3/QN+C//hXa/wD8s6P+GXfid/0Dfgv/AOFdr/8Ayzo/4Zd+J3/QN+C//hXa/wD8s6P+GXfid/0Dfgv/AOFdr/8Ayzo/4Zd+J3/QN+C//hXa/wD8s6P+GXfid/0Dfgv/AOFdr/8Ayzo/4Zd+J3/QN+C//hXa/wD8s6P+GXfid/0Dfgv/AOFdr/8Ayzo/4Zd+J3/QN+C//hXa/wD8s6P+GXfid/0Dfgv/AOFdr/8Ayzo/4Zd+J3/QN+C//hXa/wD8s6P+GXfid/0Dfgv/AOFdr/8Ayzo/4Zd+J3/QN+C//hXa/wD8s6P+GXfid/0Dfgv/AOFdr/8Ayzo/4Zd+J3/QN+C//hXa/wD8s6P+GXfid/0Dfgv/AOFdr/8Ayzp6fsp/E0/8w34L/wDhXa//AMtKP+GUvif/ANA74L/+Fbr3/wAq6P8AhlL4n/8AQO+C/wD4VuvD/wByupNH/Y98f6zE0l1Z/C3RFGdq6x4xsJHcZwCotyxU+ob5hS/8MO/EP/oY/hJ/4WFt/wDG6P8Ahh34h/8AQx/CT/wsLb/43R/ww78Q/wDoY/hJ/wCFhbf/ABuj/hh34h/9DH8JP/Cwtv8A43R/ww78Q/8AoY/hJ/4WFt/8bo/4Yd+If/Qx/CT/AMLC2/8AjdH/AAw78Q/+hj+En/hYW3/xuj/hh34h/wDQx/CT/wALC2/+N0f8MO/EP/oY/hJ/4WFt/wDG6P8Ahh34h/8AQx/CT/wsLb/43R/ww78Q/wDoY/hJ/wCFhbf/ABuj/hh34h/9DH8JP/Cwtv8A43R/ww78Q/8AoY/hJ/4WFt/8bo/4Yd+If/Qx/CT/AMLC2/8AjdH/AAw78Q/+hj+En/hYW3/xutrwl+xZ470bxXo2rXHiL4cz2tleyXMsOneJraaaVEQsqIoXaGbgZYgDOTxXxZRRRRVy20u/vLRru2srqe1RtjzwwM8aMeik4wDgjiqdFFFFFFFFFdD4RvNIsrq/Gu2Ml/pE9jNBd20cnlyOjqMbGwdrrxgkYx1qhrNx4fv74GwtG0iwJGIbK4nk8tf7vmTbGcgd2Ofc9aveCvDkvirxhpehm6j0/wC33SQC6mJCQrn5mPbgZPNdX8bPgtcfBXxVoOjXHiGy15NY01dVjmsIjGsatJJEAQTkn90W+mKKKK6HSP8AkC+Iv+wPJ/6VWtfNW0+YmQQc4O3tx1/SkooooorsfhZ8NdT+LPjGLwrodxp9teS28t0X1GVo4fLiGWwQrcnOBnA55r6A/wCGLfip/wBBbwD/AOFNb/8AxFH/AAxb8VP+gt4B/wDCmt//AIij/hi34qf9BbwD/wCFNb//ABFH/DFvxU/6C3gH/wAKa3/+Io/4Yt+Kn/QW8A/+FNb/APxFH/DFvxU/6C3gH/wprfj/ANIo/wCGLfip/wBBbwD/AOFNb/8AxFH/AAxb8VP+gt4B/wDCmt//AIij/hi34qf9BbwD/wCFNb//ABFH/DFvxU/6C3gH/wAKa3/+Io/4Yt+Kn/QW8A/+FNb/APxFH/DFvxU/6C3gH/wprb/4ij/hi34qf9BbwD/4U1v/APEUf8MW/FT/AKC3gH/wprfj/wBIo/4Yt+Kn/QW8A/8AhTW//wARR/wxb8VP+gt4B/8ACmt//iKP+GLfip/0FvAP/hTW/wD8RWqPhd8dtFtljsdF1+Oyj4W3Phm6t7cDGBiMxxouB6D618+eL/hX8RvAMvl+L/AvijQCw+T+1NFuLYP7jzUA/EE1yNFFFFFFFFFFF9FfZHwn+Neg/DH4R3+hXvgW08U6xcalPfQ6fd3fkRRI6RIpYhWLFjGx4xgbea+d6KKKKKKKKKKKKKKKKKKOgycD/Jq3aeH9c1G1W70/Rb+8tXYos9taySISDggFQRkd64a6025sJRFdQtC5UOFcYJUjII9iKq0UVsaB4P8AFXiq5W18OeG9a1ydjiOPSdNnu2b6CJWNe8+EP2GPjN4kRJL3RdM8MWrgMJdcvkVwPeGLfKD9VH0roP8Ah3xr/wD0U/4af+Dhe/8Axqj/AId8a/8A9FP+Gn/g4Xv/AMaxR/w7x8cH/mp3wz/8He8/+NUn/DvHxx/0U74Z/wDg73n/AMapP+HePjf/AKKd8M//AAdrzn/yFR/w7x8cf9FO+Gf/AIO15/8AGqP+HePjj/op3wz/APB2vP8A41R/w7x8cf8ARTvhn/4O15/8ao/4d4+OP+infDP/AMHa8/8AjVH/AA7x8cf9FO+Gf/g7Xn/xqj/h3j44/wCinfDP/wAHa8/+NUf8O8fHH/RTvhn/AODtef8Axqj/AId4+OP+infDP/wdrz/41R/w7x8cf9FO+Gf/AIO15/8AGqP+HePjj/op3wz/APB2vP8A41R/w7x8cf8ARTvhn/4O15/8ao/4d4+OP+infDP/AMHa8/8AjVH/AA7x8cf9FO+Gf/g7Xn/xqj/h3j44/wCinfDP/wAHa8/+NV6X8J/2Ndf+D/i9fEnhf4n/AA0k1RIJLZhd2N3ewNE4AdWhIUZyD0YEYryj9p79lLXfhN4Q0rx7pHifwx4w8HahfNYRato4lQpc+U8ogmilVWikMcUh27g2FYEDivnqiiiiiiiiiitjQ/Cvibxbaahd+HfD2saxZ6YqPf3Om6dNdR2asWVWmaNCI1JVgC2ASCPSseiiiiiiiiiiiiiiiiiiiv2D/2Q==";

const PinGatePart1 = ({ onSuccess }) => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  // ========================================
  // PASSCODE: DHARMA
  // ========================================
  const CORRECT_PIN = 'DHARMA';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pin.toUpperCase() === CORRECT_PIN) {
      setError(false);
      if (onSuccess) onSuccess();
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&display=swap');
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        
        .shake-animation {
          animation: shake 0.5s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 30px rgba(212, 168, 83, 0.3); }
          50% { box-shadow: 0 0 50px rgba(212, 168, 83, 0.5); }
        }
      `}</style>
      
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0A1628 0%, #2D1B4E 50%, #0A1628 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        position: 'relative',
        overflow: 'hidden'
      }}>
        
        {/* Background glow effects */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '30%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(26, 75, 92, 0.3) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '20%',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212, 168, 83, 0.2) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none'
        }} />

        {/* Main Content */}
        <div style={{
          textAlign: 'center',
          zIndex: 1,
          animation: 'fadeIn 1s ease-out'
        }}>
          
          {/* Logo */}
          <div style={{ marginBottom: 30 }}>
            <img 
              src={noeticLogoBase64} 
              alt="Noetic Dharma" 
              style={{ 
                width: 200, 
                height: 200, 
                objectFit: 'cover',
                borderRadius: 20,
                boxShadow: '0 0 60px rgba(212, 168, 83, 0.4)',
                animation: 'pulse 3s infinite'
              }} 
            />
          </div>

          {/* Title */}
          <div style={{ marginBottom: 40 }}>
            <div style={{
              fontSize: 48,
              fontWeight: 800,
              letterSpacing: 12,
              color: '#FAF8F5',
              textShadow: '0 0 30px rgba(212, 168, 83, 0.5)',
              marginBottom: 8
            }}>
              NOETIC
            </div>
            <div style={{
              fontSize: 48,
              fontWeight: 800,
              letterSpacing: 12,
              color: '#D4A853',
              textShadow: '0 0 30px rgba(212, 168, 83, 0.4)'
            }}>
              DHARMA
            </div>
          </div>

          {/* Subtitle */}
          <p style={{
            fontSize: 14,
            color: '#FAF8F5',
            opacity: 0.7,
            letterSpacing: 3,
            textTransform: 'uppercase',
            marginBottom: 40
          }}>
            Confidential Investor Preview
          </p>

          {/* PIN Entry Form */}
          <form onSubmit={handleSubmit} style={{ maxWidth: 320, margin: '0 auto' }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: 30,
              borderRadius: 16,
              border: '1px solid rgba(212, 168, 83, 0.3)',
              backdropFilter: 'blur(10px)'
            }}>
              <label style={{
                display: 'block',
                fontSize: 12,
                color: '#D4A853',
                letterSpacing: 2,
                textTransform: 'uppercase',
                marginBottom: 12
              }}>
                Enter Access Code
              </label>
              
              <input
                type="password"
                value={pin}
                onChange={(e) => {
                  setPin(e.target.value);
                  setError(false);
                }}
                placeholder="••••••••••"
                className={shake ? 'shake-animation' : ''}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  fontSize: 18,
                  textAlign: 'center',
                  letterSpacing: 8,
                  background: 'rgba(10, 22, 40, 0.8)',
                  border: error ? '2px solid #C41E3A' : '2px solid rgba(212, 168, 83, 0.4)',
                  borderRadius: 8,
                  color: '#FAF8F5',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  boxSizing: 'border-box'
                }}
              />
              
              {error && (
                <p style={{
                  color: '#C41E3A',
                  fontSize: 13,
                  textAlign: 'center',
                  marginTop: 12,
                  marginBottom: 0
                }}>
                  Invalid access code. Please try again.
                </p>
              )}
              
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '14px 20px',
                  fontSize: 15,
                  fontWeight: 600,
                  color: '#fff',
                  background: 'linear-gradient(135deg, #C41E3A 0%, #8B0000 100%)',
                  border: 'none',
                  borderRadius: 8,
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  letterSpacing: 2,
                  marginTop: 20,
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(196, 30, 58, 0.4)'
                }}
              >
                Access Portal
              </button>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div style={{
          position: 'fixed',
          bottom: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: 11,
          color: '#D4A853',
          opacity: 0.5,
          letterSpacing: 2,
          textTransform: 'uppercase'
        }}>
          CONFIDENTIAL™ Noetic Dharma Group
        </div>
      </div>
    </>
  );
};

export default PinGatePart1;
