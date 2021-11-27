// Shop icon for MediaSession API
const shopIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV8/pCoVQTuIOGSoDmJBVMRRq1CECqFWaNXB5NIvaNKQpLg4Cq4FBz8Wqw4uzro6uAqC4AeIk6OToouU+L+k0CLGg+N+vLv3uHsH+OtlpprBcUDVLCOViAuZ7KoQekUXgghgFH0SM/U5UUzCc3zdw8fXuxjP8j735+hRciYDfALxLNMNi3iDeHrT0jnvE0dYUVKIz4nHDLog8SPXZZffOBcc9vPMiJFOzRNHiIVCG8ttzIqGSjxFHFVUjfL9GZcVzluc1XKVNe/JXxjOaSvLXKc5hAQWsQQRAmRUUUIZFmK0aqSYSNF+3MM/6PhFcsnkKoGRYwEVqJAcP/gf/O7WzE9OuEnhONDxYtsfw0BoF2jUbPv72LYbJ0DgGbjSWv5KHZj5JL3W0qJHQO82cHHd0uQ94HIHGHjSJUNypABNfz4PvJ/RN2WB/luge83trbmP0wcgTV0lb4CDQ2CkQNnrHu/ubO/t3zPN/n4AJ/tyiXL02gUAAAAGYktHRADtAO0A7VaGZScAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfkCQQDKyyFnSnBAAAgAElEQVR42u29eZRl11Xf/9nn3HvfXHNVV1dXz5NmybIm25JHWTbY2DEGbMDE2En8g0CA/Bb5BUwSJ4SV2GH9WARYkB9gnGBsvDCTAWPjUYNlSZYsy5qlbqnH6q6uuerN79579u+Pe9+rQdVd3dWDWlLftbQsuav63XfOPnv47u/+HuHSc8aPc84o0ifobcDbQF7nhK0KJUBRyhadEpGnHTwkcK8o3wNmxEh8MX0XubSdp/+oqqjTETHyQYUPtWB7LY5tOVTmajHlah3PWoJMhu6cUPQtvjWaMbgsHEH5BwN/AjwmRqJLBvBSOvUaBwrvRs1/rcPeY5UWDxyY5JsHF3h4oslMM6IVxyDgGUOXFUZLPlcMZblppItrN/exqZihJMwb4U9R/R9izNFLBnDGG6G+QAAEKBHQQmiJiJ63kx9rUUU/2hL9t+MNl/37J8b5zCPHeboqtIzFicFosphiDMmLKAZF4hjjlC15eO+ubt517Sh7+rLk4PvAzxqR+y4ZwCnjbWjBbhG4SeG1guwB+oEiUAfmgAPAwygPAfvFysw5+/xQi1h+O4Sffni6bn/3zn18acwRWoMzgq6xhJLEDiyJIezMxfzSLSP84OUj9FqOGvigiHzjkgGsPHVOLXAL8BGE21EdBowiuBVvbQEcKFQxHBS4E+f+RkUfMMarrPcdQhd6Vu1/b4n8228fr9n/8tV9PFwRnBrEKA59wWLqKgssSvLOahBiurTGL103wodu2UK/J/tV9d2eMU9eMoDFZGsL8FGU9yH0hMCcwmTDMVFrMleLaIUxxlgygWEw59GXD+jKCD2ADxh1dcR9X7B/AvKXIjK7jnDz4zH6xw9PNvK/8vdP82DTQxHEOdwZRhwFBA+IAKXHRfz7G4b48M1byMHfW+H9IlJ7RRuAaiwgrwX5fVWubglypAXfGy9z9+Epvl8VjsYBjXYhJYIBisRs9iN2Fy3XDxW4YqjEzm6fXhQfiUR51In7OPAFK7Z1mka4KVa+cbQR7fmVLzzFFycj1Nr0zyA24McxPTS5rsdnd3+JvGdpRY4DsxUen6txzPmEJgAE0fR3JUTUQ1G20+A337mX27d2tyz6r6yYP33FGoCqCujbQT+pajbOKNx9vMafPzXDQw2PqiF1uQZUVvkiCigeMcM4bikKt+/s5YbhAiMeWLQOfF6RX7MiR0/j9P96U/XX/vA7R8x//84k89bDpEW+c0IXEe/enOOHb97KFX1ZSp7VAHAKVRfLWCPmkQPT/PUj43x7QWhJkPgBiTEqOFGsU941YPjEe65gY8Z+xzi9Q6yZf0UaQKzuBuBvFBk9ETr+7Ilp/vRwg0lrUTGLsVXlpK8tKEaEWAWD0hW3uLUY86OX93PLcJEuUTXIY8C/Ah60J6kcVHXEwT3PzLd2fOTzj/JI08eJQxBQQylu8UvXD/OBmzcx5EndE/22oncJMofSjXCNqtwYwebn65H9zP1H+JMn55gTH8Uh4hJDRuiNG/zW23fww7v7W57yXjHyDxdy3b2LxPUPKvx+qIyOx8ofPjLJZ4+3qNoAJ4pKkki1D/6pwq+qIskyM2cDvlRzfPfBCX5kc5Ufv3JQtgdyjaj+lYh8IFZ3txWz2t/2lhi23P38DE/XBTU2TeYU62J+6vIefvqWTQxaOSjw8wJfE6QlYtTFkQhiEOmz6Pt35+2v/JvXbxvJ2CP8zmMzVI0gqb8CZc743PnMBLfv7A96DO/RyP2jeMZdqLU3L/7mOwP8oiA31BD+4tkp/ux4RMVkcAiKRdSkm64gDkQ7S5ic/CVeQb3k3yVZw1gs47bIH43FfPz+YzxZi4hVR8H9mSO+aVW0D36gHOPd8+wkdQwqiqZLdU3e8YEbR+n3mDLw08bIF0VMU1JDMtZTMTY2IpNG9fcM8iODnhz84C2buGPYx+ry2sGJ4cGxBQ4v1IjhNRh6L+T6m4vg/O9W9CNNVO47UeGTz1WoWa9z2o0KRpNTIyrpK8eIxhiNEWIgMQiVJLa2M/Tk71AUaIjHlxYsH79vjCebDocZtXh/rKpbV6TrvapcNzZf45nZOmpsmsMrFnjL7gF2dmcR5JMId59ycY1VI3KfwK8OZaTxvldvYiCtApbG4EMt4bmZJgbdirDtFWMASeInH3bIwESkfObZeeZMYQW44lAVRJXARVzrhfzUAPzfo4Z/t8nyM0Pw+nyTAW3hxzGWCFGXhI0VVXkkljtrAb/74AkOtBwxeiXwcVXNLvmxYQfDh8o1jke6JN0QelFu3t5NIMwCnz0D9PELHnLfDaPdXNvjISz38DUxPD++gIO8ope9knKAHpD3RE7kexMV7p93xCJt+KwDrIjEjEqLD+8q8cYt3QxmDZmOL4CZGE4stHjg6DxfHGvyZAhN8TCa5AJLa/HIWL4y79j2xDQ/e92gDAjvAf4R+HT6YxtUKByZVypqlrmG0QC29RQReA7Yf9qZtkg9Uvc3Xb684dptfeYbj0wRLbVxsYwv1GmoUIAdryQDuBHYUge+NlajIkHqtgUVh9Gk5Ntpavzq9QO8cThPMdn4usJxQR3IQLele2tvIFf1DvK2nTH/8PwM/+dQlUnJImow6gDFiUFRGsbnM0ebXLupyduGgkyg/PtY3ZetmEmgV8ErN5P8obNHqgzkhf6ch4Hn7BmCNqLcb4XalUPZYs7FlK2/DMucno9pRpD3ZXuosfHFupd9CABucxBMtWK+O9lMTj+KiqYb5ihqnY9c1cubhvOUIDLwF8DtAq8BeQ3wGuCDBv6+CNW9ecOHrhzgE68e5ArPYTVGxaGyvHScMQF/9dQEJ2KA6DJV9/70j/KAqdVeuL+BJ3gWUF1YR719zEBlIJchv0oVu9CIaEURAv3GYV/2OUAS/3l1DHJwvsFklKySGoeoJkkfEW/uUt4yUiSvqDg+A3xYRL4tIhMiMiUiT4vIp4EfBX5A4Ku9ou4twwU+dn0/V3ghqgaHWQbfqir3LcD3x6s48azB/LQ67VoWL1Y8vvUQAZEzh09UpCpQKWUz5Kxd8Wcw22rSiCJAi4K8/A0AyAFbY+BQtUEryeNTzBzUQTaKecPWfjZ6goUxDB8TkepJ4mxTRO5R+FGD+X8DCG8YyPBL13YzKI20Wlj2C8ybgK88N8WMCiJyuQq3oHq+YLOmgbovgrfKR4QihC8COvdiGkAR6HXA8VqyAIhiNC26jKVflL1DQZKoCF9CdU0I14iZB/4T8Ds5cK8ZLvETW3JYojS0LP/6D8wJB+ZDHJpT9N0YSdMQOVksPyvY9WQ4pqRoRoJhyCvGADJOYb7pcEsWV9K6fk/OZ8RvN3v5qhhzWnw6EWkI/IZR7ukF3rG9l50emBWn26GMi88zk9XEAym3qWqvQ3F6vvglmn6di+N5MQ0gaFchoSQnLsn9TILpq2Nj3qNgDJL0UPef0WkTmUP4DSs0thU93rbBYFZZ+KaxfHeiQhUwIrtF5COrdfZl+ekPYtW8qmZV1VNVc6YmcLE8L3ovQEnIEu20b7Hpo3TlIHEANIAXsHxcrFaM9iqaVUwDaCXQgIvAxA53P8gDeeQNt4728KkjJ6gYr/MZkkIyz1YiZiLo9TRbc3L1giqNVZZGEVRA4d0KVzuYMzAJTKjqUZQTCCcUphRmFMpAw0JTwWhn82WV1ELPVa7x0jKAxfiXOn4RHIJVJWtMux56gd/UKB5G+WXgXQJdQEWhAjQkWfhZwcyDKwQIW0sZdmQMj4a6ZMkVRDkWWmarEdptuffwHJ/+7iGerPq41FiSXoAy2RQePFZnMCc9WU+uz1iDby0Zz+Bb8AQ8UAMtgZrAvMC0wqSgJxTZqGl/o9Phaie9SqdBdCEt4KwMQBOa1k3AVmAeeAo4CkyLSGtdxqCdU7YyVI2qahUoq7oiKp+M4Acnmko9jBBjN+BZAgueGAKTMIM8DAFQzBguKwqPzegLMIFpYK7WQLuLbCgFbM4YfKcMqXCiETIRhlSc8sB0ix/7q8fIiiVvDH0ZoT8rDBV9BnJCf9anPxtIXz6TGSjlM71F25v17bbA98j6lowHdWOXoZNJLiIklZ+AMqjCrU71qMKcogtA3Vu9a/niGEAa894L/DqwGzrARRWYAvap6sPAQ8BjwJiIlE9RJC+xerfaASgCXyA5TYcBp8IdU/UWn7x/P/efKFN1QuAHdAceeU/oDSxdvsdIIeA9124im7FsLvgvDCQqtLBMVkMUuKo/z553XE0tgnIYshBGzLRipsqO6fkWEwsLjM81ODrX5GityZMV5cGpFhEWTJPIJaCTMY68cfR4wlA2YEPeMJwHlWzyCivKiVChKkJD5GoPvihoVWDewKQgh1T1EHCIhAB7tG23QE1k/cMm6zWA1wvy/0VC76zCTCuJ1SWPQgEKGdhq4fYUqp8DjjrVhwXuB/cwsE9BJI38p0qTBAhBysqgFQYzcJkvBgP05Hz+5a17+bEw4ngr5vhcxMRshfHZJvuma+yrVii6Frft7mdbpsBA1gdttWEAVOhUH9O1JiEQRY4nJiqYjE8+m6VQ9NlgITuYZK0xA4SxUgsj5qOYqbrjxJxjeqHC8bkah2eqPLdQ52gjohwZTkQe46HiylHazaygZjGeSVr1HA6V3/vGPvZ259jUnQ0Ge3JBb8HvLWZz2wo5e2PRgyzgQ2ihLlAxiTmPqeoBhe8p+kUrZuy8GoCqBsC/c9A71nT8wSNjPDQXUjCwJWfY219gV1+ODcUcA3lru4X+HPRbuBb0g4mXMMdQPYSQZVnvT1cNfzOx8jt3Pknk5djSW2BjT47+fEBXPkNvztIfWDYVwO8F2V6i6YRyFDMVxUwttOjPBViglA0QwgRplDTOGEGModJyibWGyifuOswjLcMGH4aCmA0ZZbiYZXNPkY29efpyGUq5DKW8z+VFuG4QPIqoQj1yzMYRsy3HxFzExFyViYUGB6cq7J+pcaTeZDb2aEqG0JjkCKhQFo/PHwlxh0Ni5smh9BrHUGDYkFU25C2bilk29XT5w/1Zv7uQ6SrlMiNdee+qog8FcAHyfKz6nw187nS9wno8wDBwSwu4+8gcnz0BNT+PieH+loH5mMxz82y0s+zwHVd0F9mzwWdTd56NRWv6jCkVYK+vsreT3enJiyQF6gYeKcM9LYMeq+ObBl0mYsjEjGRgcyFge1eObYM5BvMZuksBvYFhi2/Zkw8IFGKUwBpkSYWnafalQCUMiQHPGoKsZaJhmWkJT7YsUlbiyQgjCwQ6T0mgzzg2ZmG4YNjUlWFLb4GR7iy9hSxdhYDREuwtZfG2FHEKLaeU45iZljI5HzE5W+H4bI39U2Wen6txtB4z5xLuYKSWyBomFCaayhMtRecVkQa4Op6BLnH0GWUgKwxnhas3dpnbrx3ddWV39n8FibP61PkygI1AqebgO9MtWtZPU3RJT5VHQywHYzgcw111hz1Ro5dZtvsRl/VkuWaowJbeIiMlS0YEZ9rIm54UrDCakEDU+EQYpp0wpT5P1MDUwEzUye6vU9QW/V7EtqzHzlKO3QNZ7tjVw4aMjyRJP2LaFFLtZOBp/UjewjU9wmS9xtGmZQFDQw2IQbCEkgTfaSfsrzmoKTrVxNMGOY0oSsSgJ2zKCFt7CmwbKDLSm6WvmKe36DOch50FD39TDlVoOmVBHZN1ZXa+zuRcjQMTNZ6ZnOVIOeREU5h1lobxiNMEuYUyrcJMJDxXNlB2/N3UAt888Dj/9V1XFV/Vm/3PqvotEdl3PgzAAhI7GG8YVAXPuU4J06l1hQ76HmI5LjmOh45vT0Fmskq3zrLVc+zqK/J4BZyaFKrtsABwJGTQXhF+9vpNvOpYje9PVthXN5wgoNUppYQYoWagpgGTLsNTVYOpwOjxCfZuzDGY8V8QXWRJ0dXOzLus8HNv2Mv7YuVEWZmcL/P8ZJUnx+c4sNDkaGiZU59mp4z00rZVzILJModwLBIejRxSc9ixMr7OUdSQPhuxOWfZ0Vtk60Ce4e4MA90lBkqGkZxhb6GEv6lEfCXUdBsVp0yVY6bma4zP1TlwosxTU2UeW3Acdz4OwZk2b8Lj3nLMnz94jL137NhShA8AHzsfBlBoAzXNeNFlL0ZyXe7IlxEfEsCsKYYJ8Zlw8ODUYnMmLYNSIgfUgJpCL463bunjdVv6mVNlbD7k+akKDx2Z59FykwMNy6wGOCeL2yqOSCBKXXz7pVR1cVInjb+iiamZ1BvUY0e/MWzpM0hfD+H2Hmo6wlwMk3Mtjs/V2DdR5cmJOQ5UI8ZCYdYJcfsryOKaOIRQfGriM6HK0zWQmkPG5sloTEEP02dhay5gV1+ObQNZhrrzDPbm2ZAXthYtV3Z3Y7d1E+owC6o8c6LGn99/gL8da1AVv7PIzlgeOjrPsYUWu7qCt0bOfdwzpn6uDSDXLmIiTWpqPSfAhS47myrC18Zb+PEEVwwU2TngMxJYhjzD5t6AG3r7eOfuPk604NhsjSfGqzx0Yp7HysqR0KOpBoxLyddtr5RQy3TJJ65883IEv33n88zjs3cwx4beEqO9HiMZQ59n2TqQgYEMrV29VHSU6aYys9Dg8HSNJ8bneGqmxr6qYyzyiNQgRhAxOJVlnwuGhjE08JlReK5q+Gq9hYw18eIpisRs9Aw7igG7+nNs6c8z1JVn10DADcMFdrzjcvru2s8n95WpE3T+3iP1kCOVKju6gu0WNgAHzwsQFKHUoxgn3ll3yVYzAAEORh5/cEzJHZ1lUEMu77JcPZRl70CRHV0emzM+OwLYNZTnlg153qODTFVjDk3V+O54mYdn6xwvS8cA2qfencReXdKK4IQz/PUc2NkqJlqgR2J2ZIU9XTl29ufY1JdnS49lY8ZjJPDYNZTjxqEc77i8n7kIpitNjsxUefLYHI9O1Xi0LBwNTZLNSNL2dilnUTRFBgFRk8R4a5lFmVF4vCzIQhPzXIOCjrMnq/z0qzfwzr1DfOS2nRyaeZp/nIqIU+865wxHyw6gGxg5HwaQaxMqQnWcj6HsZSdFDDUbcIiAw3X4yoGQ/P4JNnvKNb1ZLhvMc/mgz/asz1DWY7BouaxQ4g3bSsxGMD1fZ3PRT7+oEq/xwu0cRlRwYok8j0kRJkLl/imwExUCnaXfOHYVfHZ1eWzvL7F9IMvWgmVDLsOVPck/b9nRx0KcGMSBqTqPjc/x8FSTR+dCpuKEpCJiO3BzQmWXJRXxYotYjVAhy/dCOHTfMbozljt2DPDjN4zwwJcPMqGJ1wxFGJtpoZAV2AJ8+1wbQBcsltHSyaXPV6toKYsHVDwqnsdTwNOzBn+yTMlG7MnCVb1Zdg8W2NvjsSOfYcQTRvtzHQ9gEDCLeYKcpN/fWXQWx7tT54GzlgaWMZRjNeXuWowZmyanEZsDy2VdGXb1BuzaUGBnt8/mfIY93QF7ujO8cWcPcyHMVhs8M1HhkWNzPDSlPLbQouY8xDpi8dZckRny/On3JrhxtJcbRnu4omiYrkAkSUieLVeIQTzR0fPWC1CVFRSHC9/kVByhFzAtAfeGjvvGHbmxGYYt7M0LVw4UuGooYE9XjsGcpUWSXMqpPI8Csa42frgqvcOowVlLWXweV8OT84KZbZHZX2WTB3uKlj0DeS4bznFZd8DmQpY9PVl29WS5fc8A1aZjvNzk0fEFvnGkzDeON6iItwRdX70Qu28uZP90nVdvLHLVaDf3PjWbSFIIzFVahA4yxgyfv2aQLD1DL44BSFosoopRg4pPy1gOinKoDl9/vkbpYJmtgWVvT4ay+CRTg7pqY14AY6Ar41Gcb9ISSyQGJ+akJqOAMwmdXdSBGlQsDWvZT8z+ivKVhSq55+bZ6MGeUobdQyWuHrJc0Z1npOhzRX+WKwZyvP2yIe47NMdvPzDGYw056eeqCA18nhqf51Ubi+zemMV/UtPSFKpNRxgDogPnpxeQVgChS+jWKucnFzi9ALHYSBJ1CbcgzbidFzADzETw6GQMxOiyRZW0MygIPg7osfArt23mh2brfH+8zLeO1HiyHCeNfc8SpfmBpNNKie1bjC5h16Rjae2RtdgYKnjsU9i3oHhzc3Q9GzPiw+6ugKs3FrhxKMeV/QXevrOXvlKG//TV/TwSZtCUKCNLXJJKsu775kNChU35gKDNNhBhoRVSDyN6fduv6qzIyZlU6wWCiB1Ezl10EhMns8N41dOU/LQTZawlPFdx2HzSSXzdhiKv3VDkg1cpz8+HfG9ijnvHIh6brjDhDA0xhGI6XAY5A78VGY8ZhGlneXIGvji5wJDM8bZNPj9z4yZuHsrzczdt5le/dYxpDVb5G5L3His7XKz053IUgNmUmFQPWzRdDNhijHjAOTWATNvG9SUuMqYm9WBquLMC++4eY2/J4+bhgFcNFNlZCshb4dq+gOv6hnjfHmWsGvPI5AL3Hqny2HSTo42IigkIxXSGWtY6FQ6DqE09ltK0AUdR/myshYuO8su3beHWHT28/okxvjCXTjctJQylSelENSRySl8+S8mzECd0uqpTGmGMIoWEo0LzXBqAv3qO/lJ7BHGW9iBKiOEQHkcXhLvnW+SfnmRH1uPmYcstA3ku68/R5Rt2ljx2l/p41/Zejtcdj04u8MBYk0fGqzzXUuYwxMauhECXrVTCTTQ4kxiAcUlIaVqfvz5R5U0TVd62qcQdl43w5W+foL7i75O0kzUXKrFz5ANLwTcQJ/oFjUgInaJQSBXVqufEANJhDsvL4lnOOUi+XxLjI4G6WGZbju8favGpg3U2ZX1eN2C4ZSDP5f15BrOWLXnL1i29/OAWONZQHpte4L4jVe4+XuXZliWyNhlsXVZYLuYJppNLaAdJW7B5Hj5S5vaREruGuxjgMEe08EIgzijzrkU1VDbkoRgYpBGj4lN3lmYcY5SMkVPvscelh5PVfE6gJZaWWvaFcPAYfO7IPCPeHDcOeNw4mOW6oRIbch6bcsKW0W7eOtrNY3MNPv3wOH89EVIzAUbjF9DQVmuVtPsHz0wuUIk2sKFk2Zy3HGksd7WaJpjNWKi2HKYAhcBiNSYSR4QjTH4uR8IjOTcGICKqqm4RqnKvDANJQ3BETMvzeB44OOn4/HiVDV6Nm3rgtqEC12wosLno8+qeLKO3bWXokWP8/nM1mpI9o2A51nLMqdIvMFrwkcby39ZUci5WQ6XRQiSg4KdilRLTdDGV0KGislY+sh4PEC41xQ4k+HLd+aU1f7rwTiTpHRph3ME/zjr+cbrG8DMV3joI77timL1Fjw9dO8Jk9TCfG4+J5PRHB6ZDx4JTNoqwoRAg0w5d5gKSvytWaLZiQCjlMiS6mUlXMt2kYC0PsJ7BkBagRgTTiW7m5bn/Kkv+Mah6nSy8jRs70USr1vgcIeD/nDB8/IFj7K9GbAqED1w3xE7vzAjSdWeoNJPdG8jnwLmV6WuCZxhDNYoRIB/YDjciBKpNbSfs/rk2gAjAClhzSWt6aXGnKLGx3FWz/PnjE8w7uKo7x1s3FzHu9Im7IYZ6w+EJlAoWK6vhj4pTR63VQgVKGUkmT9IRW3ea0Xk9BtAm/OC1x7kuPYuEFiA2Pl+eUp4vh2QEbthSoqThaecBEZZmM9E+6sp5oCsnmzXhMhpDK8UEirm2YHWcDDh3Jk1PXbWt23cbkUseYJVT0SZ7HHeWp8erOGBXMcNWXztx3KzRaYrE0Gi1MCpkrMGunGlMczt1jmoU4YCsn4LialAxhJEmOYBSOucG0Nbqas/SX3ICafjt+MZEpOrAfJUQGMj4jOS8Dg6Q1P6nCCYi1KMIFcj6Pt6qEtTJKForReMD2/7dhGdQb7plW3XOPcDJQJVLT3uPDOOtkAZQ8oX+rNcJl/EahZMCjSgZmQ8CH3/FqPqihA40EsSPgucvygoIqDu9PVmPAbh2JiwvA0D4fIaE2dgQOvAFcoHflrRfRahipYc31FoOp+AZi/cCrQLXIeKUG46oDSRqqmtwBtoG6zGAhcUdd0lD6FIq8MJNVFhoGVoxGJRCYDEmgYOtujW9Rz1MPEAmAH/FXKioTXAIBRGThADRpCw/Q3WR9eIAa6GolyIA0FAhckndHngG1baqqVvTezTjBOixFuwLprwkkc+FDsScC3w8WbsTec7KQETIeSkwcikErGoBtcgRx3GSpef8ZC4BWaY/eLIYW200iVEyFjKsFgIScttC3aXaArIkHLdzv7UtYv1JoAj2LMWMZI3/fmnnAEoo4FKRSmva7nntOQoVoR4rTiEwkFlRbrdzCIfQdEs7jbraEp+fbqBJ0cDlVncGG69CRhyGmDDV4XfYlLatLwsTaDhLHCkWIe+BVYdTh8GlXmD1NTOqVKKQKJ2WXpkzdrTSRdJ2c4L2GKe4F+pI2HNtAGHbANp97DMVNXEi+BpxdY/hg7t72Tdd5e5jLR6tJ/OBLwd0MbncynRmDrMenSmltVYrOQPJJmdEyHve0hZcyg9M+H/tYJDxvGSSchVtq/NSBbR59qLrcN3iiAWq1QY39mX4+csG+G+vHWLYq69qriIvveAgKE3naKQ9ACuaVk0m5See+ju1YiVOj2+w4lQbJJ1jFBpRjKjiex5iDGb5Wq2pSbf+XoAI2WB95CBxCRt3qglzNUdJYNQ3jAS249KSl3MMS8hlNqTHhRhOH9yQi6BKiVHi9FDmMgYvfR9dY9mdQCWKCdMhWbNajZk+zTBanMx4YUWunIIQelZJoIiSM25d4brdV68iHC5XiYGMNezqNliNEqxchGGa/JcbevjDN2/ko1d3M6oRyw+DLAYjUZyhIzBl0pl+laV/7rhQ8UUS4cmOvmAAmM61U7Lm+sTpZmYEihnvBUlge4gl1pVuv33oXWIp4qJznQMsy9LWd8AM4AgR9pcTbZ5AYGfBYrRFaCzGxdzal+F1/Xn6jbBha5HxhQa/e6jVGUjtpEMSJhutJlUZU2KJOoYgadzUC+kSJPFyzTDpC3iinaaO0VPHTek0fIOtSaIAABZHSURBVAUL+FZWOUBgOXsyznpzgLjd+FihoHlmLlJ8np0VIk1YCzsKOdpOxWjEZf1ZemzCauxR5ZbNPXS71rKF6jchP7GpwFtzymgc4qlDVLDqyMQtvDQGJ5t/4YgrTpRIoBklZzFvDBlJkNO1QplBiTSZwE4QXl0FiDmdHG9tY1+PB4gANQbyQfKy8RnTwtrVg+FQuUXVKXkrbOrOkrfzNICMOrb05FKh6KTltbFkGPGVqQ4hR7kqB79wZQ8Zunm63OBzh+p89Wid23qE144O8Px0i789VmbWZpIztWQqbLkqjbxgec+yDCAdXGvfdtipnJI+ijmpM0qSu2gJ5KqnxOTO5lk3DiAIWdF14YCi2lmcyVAZr8UMlTz6M5ahQJiJYga9mE1F6TQ9nEKPge0ly6Pl9uiVY29R6PWg2wndPTnuPlanz7X4l1eNclOPT3lLnv5cxG8/18BZLz2dCSybtGVNGpMN57KxZVQQl0C6y+eRky7eqSKRiiFSm4hnCXgreRftMXKVk342nL9uYNTOLJeqbaz3KTs4Wq6lLU3DjjwY59idD9gQJFfAhSrEIpRE2NOdxaSaRErMnr4cOZKp7xBl31SdjLUMZDwChQFRfnBrD5ttwsO3qtycifnlrVn+WZejFDWTmlsc51LFu21KjTDqeJvEmBNS6VpAWVtB0ROh4Ptn/Nltp6znwQCqQFMEAnv2XYAGwoFaRKyQMbCrJHgOdnVl6fcNMcozU/NMx46swNauPJnYISLkVdnZm8NPE6Pj9ZjDDceMCs/N14glYS71BB4bcibxIhry89f38wtX9fIfX7ORD+0oknXNNRs066l0XFr5O5LbRnI26eK5NZZdloQqH8iZMyy3RfBTo1krOJ8VJzDnr7jScz3uRAzPTEWdSmBrMYNxLbb15cighAjfGZvhWMJwYbCUo6gRxI5RHwayQZKHKBxYqDMRwqxY/uKpWZ5oxMyQ6OYcqyeutccoW/KGvDpGPeWf7e1ibxCtWZuvCwpasvqekfSeQ3dGo6Tr+2TIZoRU/a56PspAB+BLm4C4/i/kxHCk0qLslA0m0dbrZpot3cmGlIFHZhuMlGMk7zFUhAEbM42wpyB0ZZOByBh4es5RVx81wl01ZeqeI1w7UOTp6RrH1EeNYzZSxhvK5UFyf8BGz7K3K8cjc6ZdO583ZDAZ3Dj9n6dd0cuZfZLRzl2qjhXt+3PhAeokOrXkxKZM1LPDzCebMZO1BNHakPPYk4XNmYRCNd1Snq37HC/XiYFBa9heCFB1XF7MUEyFKhrAUycqhGKwChlRnmhl+PRYyAPNgCiNwQvG40v7ZjnmEj5/xSkzLXceNz+dnNDFf1+rbF7C6kU6xfZKIOAkPYTTgprOARDUNgAhPqvlUWDWweFKnStKPiXfcv1gnsFswnGbLDc4EgXsm2pQ3wlFK+zuy/P1aos9A4XO2MtEI+ZgIyIyHkUX839d1s0GAw8eXeD+hRYHCFAsMR5/c7xF5Ca4ZaTEs7MtHqxEGDHnePsT4kcUhUuGT0/3tCTUrlhXT0vbumcqyT8rPYQgJGnD2h+4XgMILWCMW4Qlz+Kpi+FgNSZCyVm4eSBHySQNsIOzdeaMZf9CnXlVNhphtMunL55ntDSAxRFhOFhpcLwlYIVAHXvzjjdv7OZt20rcO9XkFx+Ypm4ssTrKJuBzJ2L+ZnyW2Fiakk1Hts+d4JWkKl+NKF5UPZOlWf6pn5ZC5Nou2q0o8zq3JS+GUhRVRRV8lHxWUGiiUj8fZWAZVbJeumxnuWYtMeyfbREhFIxw80gPPo468Mx0lcjA4WbMZCsBUQZ7MuzOtOjJ+Zg0f396LqSKn1KlkrHrABgCdgRCJt2QjCrvHA5472DEiO8Ql2oQnwWwfapCME7fz4hgrV0UolqzkSQdEe2THTFVhzXLrjcGSZponjokkbs6L72AUAQyJs0BztIFxAiHFhqUY9hgIONZFGUmgmfKEaIZptUyWW5BJstoTriuCD3BYvx/ZrpG05g1T6WJY948nOX2TT1MVEO+Pdnkdx+fYeLUM5TrCv1L18UzlgzJ+JaexoKpuo56vqzwGe1DZ4Gc76WneHFSM2uUvDUYUFljgnu9ZeCCIOSsd46aa5bxuuN4pdlpdKgKE7WQfS0PJ4a6yXBsvk4IDFnDDUNdFNIoN9mIeX6heXKuXRsUScGzrCpDOK7Ke7x2U45ucZwvQlqbL+GJ4OuKbG2tTFBXh/R1CWodeBZEaEVRp0ts0fZEaAO0ea4NoBOUfD/V3zxLKxCE4+pz71QjqVkkUek4NNdkSj1QIRTDc9N1WkCPZ7lx6xA2XaPDtQaHWglTtlOlCp2bSNsnRtPI2VHsEE3x+ZjzTUMTkUSm/rTaJsJSlt/KZpBNryBLAOwkeW1FYUcD0TOdsb0I7DnnAzhgrm3V56RzZhx14/N3+xf43kJETWDSwX3H5ok7CLqwf6HBPInuSW/Ww0pSIz8765h3fopQ6ykbYrIEytJl/60XgN0sZ9DCWRrcT8bzks5Nq0uL2JxnCayHIlU49eVd620GtVAoZiwehtZZuk9Jv8STIfz6/WPcsaOb2bryxQkFYzu8w+dbykRD2ZRrx9IE5to3Uyc2bSDHnMXWnM9nuT7QqVrTIolg5aKmxIpbxlL01ajiiVspH4WnjkDAKBFy6kHx9SaBcyIJTm3k7HVCNSUVhBrwSCg89XQDhxCbTLviRcQw7rI8N1Xhms1dtM/7VCNm32ydyGQ4neOlq+72heKNnf4qiZxa0rZ9v3Exb9LGTxoyFAq+JUhmNiqsUQWsNwlsGCCXEQJxZ58DONNhwroUF2iKEKcKHIokF1SIx989N82BUIlEiVCerrbY12q7VvtCV5kqeHZQsvQSyOVc5kVq2cXwqCoZSWYCVveY0nlbzySd0TBO5GoRIRAfYwyKNojNeeEEzgBqUTyNz82yreISV7YzHcJdlYA/fOQEj1RinqjH/NUzc8xIsARuXd1k5QUR+OLlnqsqdknfYDVW9OI0RmL2URSmyaJS9A1ZzwORBda4PeyMQ0CqFFYXIGeEvF2M4RfiaYjHZycivnziGOAz6wxqDRBjiNdotb40Bg5Ekosl2vuuKwgeTtpVgMOmVYDTFDBSR9ZLvIdqXBfr6flIAqcT92MoeBZtufTq0wvxGCICJtsz8jYRTxaEOBWwdeJYqqvVLgGXxnu5EC5fz+5XTwIDLNLmFYrZpFqI2si/Klnf4BuwYqZPo9ZY1zOX1E2GvG8RcyHFQ1MRJNo3fcmSXbYISojHgTqMRckVm8lFCktiQQd9WFrZnttuoKzA6s9099u4PpDM/K+omtLrL8iQhOBKmOYAQC4TYA2AVNb6qHV6AK0AGCOUPF70Ua6lUuqOREv/956q88CRed40XCLoyhBK+nMumaNP74W5SGPAEphcoR5GrBzxayObfrrpoWrncBQD20YCp86TAbAARNYQdAcgTtOrWC6GJ5kvXED4esXjzmeb+FKnKSYdDlFaxhDLxa2T21YYDlFqcbzMANrt31iVgucvAjNpuVPIBSR3lMvM+TSApicERRvjVLiYltOlMraqiZhilNKzQFHjcddYmQ1Bnh19Oaokw6ovzp0nJw8BniinYttLKgXjpe9drceJXosKpWwmhYE5bwZQA+o+lPr89g0WF8nJadNp1C7Z1PYQqyaEkPGIu4+f4JqiMjrSy6z6p4nRX7gnY5KGzskGbwTFCgRewoBqRkmrOVChp2gB00KZO185QB2VsicM9fkekkyyX/SPYpL4LzAlBb5ZF3i+Sbzk9s2L5fGMECz1aCtShPawSc4m4FmiFGIoEbGhZBBoILqmAay3CggRnfOA3kz2Jafn4NImkpIINiB6WnP7L0YSKKy8XT2ZLVRJRk2zXvK/LZcMhOzOeOzqLmBUq5pwas+9ASgSgTkhQG8+OOec+vNfRJIKPcdp2DBcTJKXskSIO1Sl0gpXhRfUGbJeQouvVir00eK91w6xpRRgRO5zyInzEgKSi8H1mEXoyxlyBiovGQNoF9qQUCcuwndUCIxJbyWHUFdOB7f5DJDxAwKEn7xmmB9/lfDqLX1k4DjKb3lGovOVBDpU50SgNzD02+SiIr0kGLj8mOjKe4OWgFZrmGkuSFTCWwrRij6JpkmtpzHZTFLzv2lXfwMlNMKTAh9D+M5p5Rrrc1FG1blnUaEr43NlEY7M60mvRXlFPnqq/2vtdUqlIAlJbgBbDWfMeZJOaFMFPoBwGNgvIgunj5qs9/sJDyBa6bLwlpEi1kWdW7HdJTtYlq8nF226NS+uXrq9nibiEA4IV6OFi+J70haPqKPcJyIPn8nmn5UBiPIsyNczwOtGe7i92+G7EINbBs2+ovd+adnkYppnoOHblctiJWErxrIyB0j6FnmjBAnAVUW0sZ7XXL8BGNNA+bjReHpLBv7N9cO8saBkXHKP7ys+AqQzk+2zEDslit1pLrrimyQENFvQjPUFBmBU6fE9MokGUg2V8IIaQPqe31H0ox6ufk0x4D++ZoSf2eqxVapkXPSKTwkV8PwlGL7qaTPC834iJBkrxCsOlOAwKF2BbXuaWdKrfC6oAYgVh8inBPtLGWFmb87yi1cN8ke3DvMzW3x2uTr5OE7HojWhLoh7RVw31z75OeMvWeTT6ziIQM63eJKMh7kVR8k6i6jSk7GYZBhmjnWqW5x1B8eIF6rqHwP7LHysJNxydXeQ2XnNIO/YGfJPBxf48pEKByNLU7xEHeMVkiOsFNCRdpviNOqANl2l2VRaK35BNfEqA3lN+/5MrxfFOictPEnmj76pqvcD77Cqv1DE3Xh10Wb3XtXHD+3o5uuH5/inQzWeCD1qYl/2mEF7s1f/mqemr4sqpXw696BCvNrPOsdlXT65xKnMvKgGsMQQ6sBfquoXUbnDg3/tKa+7PO8Vdl42wNu3O+49VuHrh6o8VI6YE/8k17ovOUPCS9xjLCp7J+JQpzMXpFhJBmG1VcePWxg81HgJCCSOIRty7Ug/XvIBT4kR96IbwApD+IKqfhnhNoGPBPDWHRnTs2V7F3eMlvjOVJ27DlS4a7rKcZMjwqZNGZeKPaaLpW25xJdmADBp6ddwjpYk9PO1eidGHXnfYEW4YiDLb96xg8ePN3hmosJT03ViHD91zQC7BnJYmAS+tt63PK8sDhFpAl+LVe8EXmXgQwG8e6MnIz80nOONG/J8f67GnUfq3Hm8wrORIRKbEDY1Ufl8KaeLFsFPu3bOxUSn+200TqXhlA0ZL3rX1j77jm3IXKSMlWs4YEd3nm4joYP/gXDgojSAzkKIRMCDsep3gd9S4f1G5Sd7DHtu682bV/flec+uLr41VuPOQ/M83HBUJIPrSKu9FNXCExHNfOAnUUyXKoTIGgmgIxO0r5nTvxaRfwhU3jBo5cb+3sJ2xVmBgwb3+6r8sTHWXdQGsMQQHLAf+I3Y6R+J6g9Y+HAJufnqghfs3dPND2wr8tBEnXsOlblrusak+MQ2SOc3dUkxlfQeLmZep1Hwlsx4LhqAOWXO5jshZ3wEVYN5QsR8Om7FfyZiesQyKqKewJFWS6czGe+sVuBFI/JZIyeA/62qfwncYpB/kYW3bw9sz9bRIm/cWOC9Cy2+dbjMV8YqPO98WsZflEoXh6iFi4vNt8wCdAlxPc0IEE0SQjmF5friyOX8dPZXpgFsYDUFfGbP5Wu+6ExOEakAX1PVu4HdAj9p4P0DVre+vjdjXtWd4R17e3n4WJV/en6W79UNZZMhSlXAz/i6kguMAXhe8nJ1p7RiRX3tGMZJDQBHLtC25Px5pVpcNFReEWkBTzjV/+BU/6cR+SFR96EukeuvzdrsFTu6uH1LkUenQu45OM83p+qMSYZQTnfC52RzNucPCTQovp9E8haaYrW6ZDx89XfJSnLFjCZK8zOvCANYRBbFASdU3SdBPyMirxH4UAbevtUzfaPDGXPrhiF+pBJz/5F5vnG0zOMNoexliB2I2CVN2MXL1JaMB1+YL+LakSp5h0iTNnksS6QplryLyqImSJcHeSuIqAoy94oygEWPYJRElPIbqnoXsB14v4X394ruvrFog6su7+Ptu3t5/ESNrx+c4b55OKY+TkxKmVjc/EVF2wsXMyzgm2QKcZPv8fY+5bu1kKMtSyimU9+otMWhE17/5qxHd9ICjllD6vVcJKsvLXhFtQf0dlX9oMCtivSEIswqPDff4t6DM3x1qsGTDZ+WsYs5o7SnbOUCGbDQoy0+d+sg13UHtIBphWMLIY8fneee42UenI850oLIBIjxQEM8F/Frewr83KuGycEEwnUicvySAaz0sE49wV0D8j5E3uNgh4KtAWNNx2Mnqnzl0Bz3LhhmHETWS+YC9AJVDAL9GnYMwMG4gIe6/lCMzCgcKUc8eWyee47N8tCMcqLleEO38NE3bOeqoodR+TzwE3Ia5M5XnAEsfWLVYeDtgv6EILcApRCYcvD8fJNvHZnlayeaPNEySWNF/HR8XNLbOzSFbc5hLqMwRJ3PvmEjV5cCFP2YwOfBvVkx7wR5tcJgCMwoTJZbNBohG7qybMxafNykqHmnGPnOebbTl8+jqlngOuB9wLvAbY8QqSKcaMQ8eqLM146WuXs2Zg6fSGw6F6iIWkQFd464CkZhm23yqTeMcEXeouivGDGfSAw2DsBsN/Am4J3ATcBgMuAviuqziPw/wN+LnF+o62XZk9Uk2G8EfRvw44q8FiiEwEysHCi3uPfoPF851uKZOjS8pMumKud0RXZKkz954yauyBsU/ddGzB+s8q4ZYKuq3gIMAweBbxljjl0oxPJl/bjY5VS4WkTeL8q7gW0tnKmLMNNSHjtR42vHynxrKmTCGULjLReeOOnCrd2juCaI+F+vH2F3BhT9sBHzqYttfbyXuwEYa+rAd5zqQ8AngLf4Yj7gw62lQIojm4ty26YihysR947P87WxKk9UHBUCWja52Us6AvmG9nVXaxuAwydKZRMUTmNO75IBXACACfisqv4VsBf4sQB+OCPs6i55/s5SP+/e0cdTMzXuPFrjnvEGR2KlYgzO2ARY0qRWd6dBpyx54Ke6/YLULhnARQMySRN41Kk+LspvqvJGI/xEAd5csNI3NFQwrxks8M+bMQ9NVvjmoTqPzrc47oSG8VKg6dRqnwah29PUAAiBuUsGcHF6hXngC865f1BhmyDvMvC+nHDV9qwtbBvt4o7Rbg4stLh/ssJ9hyo8UW8xhRBKkIzD6co7BxPmZ5c17QUOQasX5WHg0rMarpAzcL3Cjwr8oMLWGIIImI+VJ2er3Hu8xkPjDZ5qOGYlixPBEicZglhE4aNbhH9x9SAl3BRwk4g9cMkAXnol5SDweuDHVLkNYUOsmJbAZNPx/dk6D4zVeHiyzv4m1MUnMrBJG/zuazdyU18WT9z3gDeJ2PlLBvBSLSedMyKyHXgr8B7QmxTpiVGaCEfrEY/NtXjmRINaGPHq4Ty3jxYpCaq4/2DF/rdLq/iyCRFxRtVdp6ofVaf3OdVqrE5DVW2oal1VQ1V1qqpOv6SqAxdtQnxpO886RJSAK4F3AHcAW9LkehL4W+B/iqwt1XLJAF76hiBAAegmoQJUgDmRi3sQ8v8HImEd+RLURHcAAAAASUVORK5CYII='

import { siteList } from "/src/js/site-list.js"
parseSuffixList()

// Set MediaSession API info for Chrome media player popup
if ('mediaSession'in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
        title: 'Wii Shop Channel Theme',
        artist: 'Nintendo',
        artwork: [{
            src: shopIcon,
            sizes: '128x128',
            type: 'image/png'
        }]
    })
}

// Create audio object
let themeAudio = new Audio(chrome.extension.getURL('wii-shop-theme.ogg'))
themeAudio.volume = 0.5
themeAudio.loop = true


// Function for checking if music should be playing in current tab
// if `resetMusic` is set to true, music will restart upon re-entering the tab, defaults true
function checkMusic(tabs, resetMusic = true) {
  let domain = getDomain(tabs)
  if (siteList.includes(domain)) {
    if (resetMusic) {
      themeAudio.setAttribute('src', chrome.extension.getURL('wii-shop-theme.ogg'))
      themeAudio.load()
    }
    themeAudio.play()
  } else {
      themeAudio.pause()
      if(resetMusic) {
        themeAudio.removeAttribute('src') // empty source
        themeAudio.load()
      }
  }
}

function getDomain(tabs) {
    if (tabs && tabs.length > 0) {
        if (tabs[0].url != '') {
            let url = new URL(tabs[0].url)
            return publicSuffixList.getDomain(url.hostname)
        }
    }
    return ''
}

function parseSuffixList() {
  // get local copy of public suffix list file
  let pslUrl = chrome.runtime.getURL('/data/public_suffix_list.dat')
  fetch(pslUrl)
  .then(response => response.body)
  .then(rb => {
    const reader = rb.getReader()
    return new ReadableStream({
      start(controller) {
        // The following function handles each data chunk
        function push() {
          // "done" is a Boolean and value a "Uint8Array"
          reader.read().then( ({done, value}) => {
            // If there is no more data to read
            if (done) {
              controller.close()
              return
            }
            // Get the data and send it to the browser via the controller
            controller.enqueue(value)
            // Check chunks by logging to the console
            push()
          })
        }
        push()
      }
    })
  })
  .then(stream => {
    // Respond with our stream
    return new Response(stream, { headers: { "Content-Type": "text/plain" } }).text()
  })
  .then(result => {
    // Do things with result
    publicSuffixList.parse(result, punycode.toASCII)
  })
}

// Detect new page loads in active tab, if the domain matches a shopping site, play music
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo) {
    chrome.tabs.query({
        active: true,
        lastFocusedWindow: true
    }, function(tabs) {
        checkMusic(tabs, false)
    })
})

// Detect shopping tab becoming inactive/closed, if the domain matches a shopping site, play music
chrome.tabs.onActivated.addListener(function(activeInfo) {
    chrome.tabs.query({
        active: true,
        lastFocusedWindow: true
    }, function(tabs) {
        checkMusic(tabs, false)
    })
})

// Show notification on extension install
chrome.runtime.onInstalled.addListener(function() {
    // Firefox doesn't support buttons in notifications
    if (navigator.userAgent.includes("Firefox")) {
        chrome.notifications.create({
            'type': 'basic',
            'iconUrl': chrome.extension.getURL('/src/img/icon128.png'),
            'title': 'Wii Shop Music extension installed!',
            'message': 'The Wii Shop theme will now play when you visit shopping websites. Click here to join the Discord server.'
        }, function(id) {
            browser.notifications.onClicked.addListener(function(id) {
                chrome.tabs.create({
                    url: 'https://discord.com/invite/59wfy5cNHw'
                })
            })
        })
    } else {
        // Chromium browsers support buttons in notifications
        chrome.notifications.create({
            'type': 'basic',
            'iconUrl': chrome.extension.getURL('/src/img/icon128.png'),
            'title': 'Wii Shop Music extension installed!',
            'message': 'The Wii Shop theme will now play when you visit shopping websites.',
            buttons: [{
                title: 'Join Discord server'
            }]
        }, function(id) {
            chrome.notifications.onButtonClicked.addListener(function(id, btnIdx) {
                if (btnIdx === 0) {
                    chrome.tabs.create({
                        url: 'https://discord.com/invite/59wfy5cNHw'
                    })
                }
            })
        })
    }
})
