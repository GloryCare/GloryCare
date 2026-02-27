// conversations.js
const conversationsData = {
  "stress": {
    "topic": "Căng Thẳng",
    "greeting": "Tôi thấy bạn đang cảm thấy căng thẳng. Hãy bình tĩnh, chúng ta sẽ cùng vượt qua điều này! 🌸",
    "conversations": [
      {
        "id": "stress_exam",
        "userShare": "Tôi sẽ thi cử và rất lo lắng",
        "botResponse": "Kỳ thi sắp tới khiến bạn lo lắng, điều đó rất bình thường. Nhưng hãy thử nhìn sâu hơn: điều gì thực sự làm tim bạn nặng trĩu nhất? Có phải là nỗi sợ điểm số, áp lực từ gia đình, hay cảm giác mất kiểm soát? Hãy chia sẻ để mình cùng tìm cách nhẹ lòng hơn nhé.",
        "children": [
          {
            "id": "stress_exam_fear_score",
            "userShare": "Tôi sợ điểm kém, cha mẹ sẽ thất vọng",
            "botResponse": "Nỗi sợ bị cha mẹ thất vọng là một gánh nặng rất lớn. Bạn có biết rằng nhiều bạn trẻ cũng cảm thấy như vậy? Điều quan trọng là bạn nhận ra rằng điểm số không phải là thước đo duy nhất cho giá trị của con người. Cha mẹ có thể kỳ vọng, nhưng tình yêu thương thực sự không nên phụ thuộc vào thành tích. Bạn có muốn tìm hiểu cách đối diện với nỗi sợ này không?",
            "children": [
              {
                "id": "stress_exam_fear_score_identity",
                "userShare": "Tôi cảm thấy nếu điểm kém, tôi không xứng đáng",
                "botResponse": "Cảm giác không xứng đáng là một suy nghĩ rất phổ biến nhưng nó không phải sự thật. Giá trị của bạn nằm ở những phẩm chất bên trong: lòng tốt, sự nỗ lực, tình cảm với mọi người. Điểm số chỉ là một phần rất nhỏ trong bức tranh lớn về con người bạn. Hãy thử viết ra ba điều bạn tự hào về bản thân không liên quan đến học tập. Điều đó giúp bạn nhìn nhận mình đa chiều hơn.",
                "children": [
                  {
                    "id": "stress_exam_fear_score_identity_deep1",
                    "userShare": "Tôi đã thử viết nhưng vẫn thấy trống rỗng, không nghĩ ra điều gì",
                    "botResponse": "Đôi khi chúng ta quá quen với việc tự phê bình đến nỗi quên mất những điểm mạnh của mình. Hãy thử hỏi một người bạn thân hoặc người trong gia đình xem họ yêu quý bạn ở điểm gì. Có thể bạn sẽ ngạc nhiên về những điều họ nói. Bạn cũng có thể nhìn lại những lần bạn đã giúp đỡ ai đó, dù là việc nhỏ. Bạn có nhớ một khoảnh khắc nào bạn làm người khác vui không?",
                    "children": [
                      {
                        "id": "stress_exam_fear_score_identity_deep2",
                        "userShare": "Tôi nhớ là tôi đã an ủi bạn khi bạn ấy buồn, nhưng điều đó có đáng kể không?",
                        "botResponse": "Chắc chắn là đáng kể! An ủi người khác khi họ buồn là một hành động thể hiện sự đồng cảm và lòng tốt. Đó là một phẩm chất quý giá mà không phải ai cũng có. Bạn đã tạo ra sự khác biệt trong ngày của bạn mình. Hãy ghi nhận điều đó như một bằng chứng cho giá trị của bạn. Bạn còn có thể nghĩ ra những lần khác bạn đã lan tỏa điều tích cực không?",
                        "children": [
                          {
                            "id": "stress_exam_fear_score_identity_deep3",
                            "userShare": "Có !",
                            "botResponse": "Thật tuyệt vời! Bạn không chỉ có kiến thức mà còn có khả năng truyền đạt và kiên nhẫn. Đó là những kỹ năng quan trọng trong cuộc sống. Bạn thấy không, giá trị của bạn không chỉ nằm ở điểm số. Hãy viết những điều này vào một cuốn sổ nhỏ, và mỗi khi cảm thấy trống rỗng, hãy đọc lại. Bạn xứng đáng được trân trọng."
                          },
                          {
                            "id": "stress_exam_fear_score_identity_deep3_2",
                            "userShare": "Không !",
                            "botResponse": "Không sao cả. Đôi khi khi mình đang mệt mỏi hoặc lo lắng, rất khó để nhìn ra những điều tốt mình đã làm. Điều đó không có nghĩa là bạn không có giá trị, chỉ là tâm trí bạn đang tập trung nhiều vào áp lực thôi. 🌿 Hãy thử nghĩ về những điều rất nhỏ: một lần bạn lắng nghe ai đó, một việc bạn hoàn thành dù không hoàn hảo, hay đơn giản là bạn đã cố gắng đi học mỗi ngày. Giá trị của bạn không cần phải là điều gì to lớn. Bạn có muốn mình cùng bạn tìm lại một điều nhỏ mà bạn đã làm tốt không?"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "stress_exam_fear_score_identity_deep1_alt",
                    "userShare": "Tôi vẫn cảm thấy mình vô dụng dù biết mình có điểm tốt",
                    "botResponse": "Cảm giác vô dụng dù có thành tích tốt có thể khiến bạn rất bối rối. Đôi khi điều đó xuất phát từ việc bạn đặt tiêu chuẩn rất cao cho bản thân, hoặc bạn quen nhìn vào điểm chưa hoàn hảo thay vì những gì đã làm được. Cảm xúc này không có nghĩa là bạn thực sự vô dụng — nó chỉ cho thấy bạn đang tự đánh giá mình rất nghiêm khắc. Bạn có thể chia sẻ điều gì khiến bạn cảm thấy mình 'chưa đủ tốt' không?",
                    "children": [
                      {
                        "id": "stress_exam_fear_score_identity_perfectionism",
                        "userShare": "Vì tôi nghĩ mình phải giỏi hơn nữa mới xứng đáng",
                        "botResponse": "Nghe như bạn đang mang trong mình một tiêu chuẩn rất cao. Cố gắng phát triển bản thân là điều tích cực, nhưng nếu 'chỉ khi giỏi hơn nữa mới xứng đáng' thì bạn sẽ rất khó cảm thấy đủ. Giá trị của bạn không tăng hay giảm chỉ vì một vài điểm số. Bạn có thể thử tự hỏi: nếu một người bạn đạt kết quả như bạn, bạn có nghĩ họ vô dụng không?"
                      },
                      {
                        "id": "stress_exam_fear_score_identity_compare",
                        "userShare": "Vì bạn bè tôi giỏi hơn tôi",
                        "botResponse": "So sánh là điều rất tự nhiên, đặc biệt trong môi trường học tập. Nhưng mỗi người có tốc độ và thế mạnh khác nhau. Khi bạn chỉ nhìn vào người giỏi hơn, bạn sẽ dễ quên mất mình đã tiến bộ thế nào. Bạn có thể thử so sánh mình của hiện tại với chính mình vài tháng trước thay vì với người khác."
                      },
                      {
                        "id": "stress_exam_fear_score_identity_empty",
                        "userShare": "Tôi đạt điểm cao nhưng vẫn thấy trống rỗng",
                        "botResponse": "Cảm giác trống rỗng sau khi đạt mục tiêu có thể xảy ra khi bạn chỉ tập trung vào kết quả mà chưa kịp ghi nhận hành trình. Đôi khi bạn đạt được điều mình muốn nhưng lại không cảm thấy vui như tưởng tượng. Bạn có thể thử dành thời gian nhìn lại quá trình mình đã nỗ lực và tự thưởng cho bản thân một điều nhỏ. Thành tích không chỉ để chứng minh với người khác, mà còn để bạn thấy mình đã cố gắng ra sao."
                      },
                      {
                        "id": "stress_exam_fear_score_identity_not_believe_praise",
                        "userShare": "Mọi người khen tôi giỏi nhưng tôi không tin",
                        "botResponse": "Khi bạn không tin lời khen, có thể bên trong bạn đang có một tiếng nói khác nói rằng 'mình chỉ may mắn' hoặc 'mình chưa đủ tốt'. Điều đó khá phổ biến. Bạn có thể thử ghi lại những lời khen đó và tự hỏi: 'Có bằng chứng nào cho thấy mình hoàn toàn không xứng đáng với lời khen này không?'. Đôi khi ta cần thời gian để học cách tin vào những điều tích cực về mình."
                      },
                      {
                        "id": "stress_exam_fear_score_identity_overwork",
                        "userShare": "Tôi đã thức khuya để ôn, nhưng vẫn không tự tin",
                        "botResponse": "Việc bạn thức khuya ôn bài cho thấy bạn có trách nhiệm và nỗ lực. Tuy nhiên, thiếu ngủ và mệt mỏi có thể làm suy nghĩ tiêu cực mạnh hơn. Đôi khi tự tin không đến từ việc làm nhiều hơn, mà từ việc chăm sóc bản thân tốt hơn. Bạn có thể thử ngủ đủ giấc vài ngày và quan sát xem cảm xúc có thay đổi không."
                      },
                      {
                        "id": "stress_exam_fear_score_identity_self_label",
                        "userShare": "Tôi luôn nghĩ mình kém cỏi từ trước đến giờ",
                        "botResponse": "Khi một suy nghĩ lặp đi lặp lại lâu ngày, nó có thể trở thành nhãn dán mà bạn tự gắn cho mình. Nhưng một nhãn dán không phải là toàn bộ con người bạn. Bạn có thể thử tìm một bằng chứng nhỏ cho thấy mình không hoàn toàn 'kém cỏi' — có thể là một lần bạn giúp ai đó, hoàn thành việc khó, hoặc vượt qua một thử thách. Những điều đó cũng là một phần của bạn."
                      }
                    ]
                  }
                ]
              },
              {
                "id": "stress_exam_fear_score_rejection",
                "userShare": "Tôi sợ cha mẹ sẽ từ chối tôi nếu tôi thất bại",
                "botResponse": "Sợ bị từ chối là một trong những nỗi sợ sâu sắc nhất, đặc biệt là từ cha mẹ. Nhưng bạn có chắc rằng cha mẹ bạn sẽ ngừng yêu thương bạn chỉ vì một kết quả thi? Có thể họ sẽ buồn, nhưng tình yêu thương thực sự không có điều kiện. Đôi khi, chính nỗi sợ của bạn khiến bạn nghĩ xa hơn thực tế. Bạn đã bao giờ thử chia sẻ nỗi sợ này với cha mẹ chưa? Có thể họ sẽ trấn an bạn hơn bạn tưởng.",
                "children": [
                  {
                    "id": "stress_exam_fear_score_rejection_deep1",
                    "userShare": "Tôi không dám nói, sợ cha mẹ sẽ nghĩ tôi yếu đuối",
                    "botResponse": "Nỗi sợ bị coi là yếu đuối khiến bạn giấu đi cảm xúc thật. Nhưng thực tế, chia sẻ nỗi lo là một biểu hiện của sự dũng cảm và trưởng thành. Cha mẹ có thể sẽ trân trọng sự tin tưởng của bạn. Nếu bạn chưa sẵn sàng nói trực tiếp, hãy thử viết một bức thư ngắn. Bạn có thể bắt đầu bằng: 'Con viết những dòng này vì con tin ba mẹ luôn yêu thương con...' Bạn nghĩ sao?",
                    "children": [
                      {
                        "id": "stress_exam_fear_score_rejection_deep2",
                        "userShare": "Tôi sợ viết thư cũng không thay đổi được gì",
                        "botResponse": "Có thể bạn đúng rằng một bức thư không thể thay đổi ngay lập tức, nhưng nó là bước đầu để mở ra cuộc đối thoại. Đôi khi cha mẹ cũng không nhận ra áp lực mà bạn đang chịu. Khi họ đọc được những dòng tâm sự, họ có thể nhìn nhận vấn đề theo cách khác. Hãy thử viết và giữ lại một vài ngày, rồi đọc lại. Nếu bạn cảm thấy ổn, hãy gửi. Dù kết quả thế nào, bạn đã dũng cảm bày tỏ."
                      }
                    ]
                  },
                  {
                    "id": "stress_exam_fear_score_rejection_deep1_alt",
                    "userShare": "Tôi đã thử nói, nhưng cha mẹ không hiểu và càng gây áp lực",
                    "botResponse": "Điều đó thực sự khó khăn. Khi bạn đã cố gắng nói ra nhưng không được lắng nghe, cảm giác tổn thương và bất lực là điều dễ hiểu. Đôi khi cha mẹ phản ứng mạnh vì họ lo lắng hoặc không biết cách thể hiện khác. Tuy nhiên, cảm xúc của bạn vẫn rất quan trọng. Bạn có thể thử tìm một người lớn khác mà bạn tin tưởng để chia sẻ và nhờ họ tư vấn. Đôi khi một góc nhìn bên ngoài sẽ giúp tình hình dịu lại.",
                    "children": [
                      {
                        "id": "stress_exam_fear_score_rejection_teacher",
                        "userShare": "Tôi có cô giáo chủ nhiệm rất hiểu học sinh",
                        "botResponse": "Thật tốt khi bạn có một người lớn như vậy. Bạn có thể xin một buổi nói chuyện riêng, chia sẻ áp lực mình đang chịu và hỏi cô cách trao đổi lại với cha mẹ. Cô có thể cho bạn lời khuyên hoặc hỗ trợ làm cầu nối. Đôi khi chỉ cần được lắng nghe cũng giúp bạn cảm thấy vững vàng hơn."
                      },
                      {
                        "id": "stress_exam_fear_score_rejection_no_adult",
                        "userShare": "Tôi không có ai để nhờ giúp",
                        "botResponse": "Khi không có người lớn trung gian, bạn có thể thử viết ra suy nghĩ của mình trước khi nói chuyện lại với cha mẹ. Viết giúp bạn rõ ràng hơn và tránh cảm xúc bùng lên. Bạn cũng có thể chọn thời điểm cha mẹ đang bình tĩnh thay vì lúc căng thẳng. Nếu vẫn khó, bạn có thể tìm đến tư vấn học đường hoặc các dịch vụ hỗ trợ học sinh khi có cơ hội."
                      },
                      {
                        "id": "stress_exam_fear_score_rejection_scold",
                        "userShare": "Mỗi lần tôi nói là lại bị mắng",
                        "botResponse": "Bị mắng khi đang cố giải thích là điều rất nặng nề. Trong trường hợp đó, ưu tiên sự an toàn cảm xúc của bạn là quan trọng. Bạn có thể tạm dừng cuộc nói chuyện khi thấy không khí căng thẳng và quay lại vào lúc khác. Đôi khi thay đổi cách diễn đạt, ví dụ nói về cảm xúc của mình thay vì tranh luận đúng sai, có thể giúp giảm xung đột."
                      },
                      {
                        "id": "stress_exam_fear_score_rejection_compare",
                        "userShare": "Cha mẹ hay so sánh tôi với người khác",
                        "botResponse": "Bị so sánh thường khiến người ta cảm thấy mình không đủ tốt. Bạn có thể thử nói với cha mẹ rằng việc so sánh làm bạn mất động lực thay vì cố gắng hơn. Nếu chưa thể nói trực tiếp, bạn có thể tập trung vào việc ghi nhận nỗ lực của chính mình. Giá trị của bạn không chỉ nằm ở việc hơn ai đó."
                      },
                      {
                        "id": "stress_exam_fear_score_rejection_giveup",
                        "userShare": "Tôi không muốn nói nữa, vì nói cũng vô ích",
                        "botResponse": "Khi bạn đã thử nhiều lần mà không thấy thay đổi, cảm giác bỏ cuộc là điều dễ hiểu. Có thể lúc này, thay vì cố thay đổi cha mẹ ngay, bạn tập trung xây dựng sự vững vàng bên trong: đặt mục tiêu học tập cho chính mình, tìm nguồn động viên khác, và bảo vệ năng lượng của mình. Việc thay đổi mối quan hệ gia đình thường cần thời gian."
                      },
                      {
                        "id": "stress_exam_fear_score_rejection_self_blame",
                        "userShare": "Có phải do tôi nói sai nên mọi chuyện mới tệ hơn không?",
                        "botResponse": "Khi cuộc nói chuyện không suôn sẻ, nhiều người có xu hướng tự trách mình. Nhưng xung đột thường là kết quả của cả hai phía và hoàn cảnh lúc đó. Bạn có thể rút kinh nghiệm về cách diễn đạt, nhưng đừng đổ toàn bộ trách nhiệm lên mình. Bạn đã cố gắng rồi, và điều đó đáng được ghi nhận."
                      }
                    ]
                  }
                ]
              },
              {
                "id": "stress_exam_fear_score_shame",
                "userShare": "Tôi xấu hổ khi điểm kém, tôi không muốn mọi người biết",
                "botResponse": "Xấu hổ là cảm giác muốn giấu mình đi, nhưng nó cũng là cơ hội để bạn học cách chấp nhận bản thân. Ai cũng có lúc thất bại, và điều đó không làm bạn kém giá trị. Khi bạn chia sẻ khó khăn với người đáng tin, bạn sẽ nhận ra rằng mình không đơn độc. Thử tìm một người bạn hoặc người thân mà bạn cảm thấy an toàn, và nói với họ rằng bạn đang cảm thấy xấu hổ. Bạn sẽ thấy nhẹ nhõm hơn nhiều.",
                "children": [
                  {
                    "id": "stress_exam_fear_score_shame_deep1",
                    "userShare": "Tôi sợ bạn bè sẽ cười nhạo tôi",
                    "botResponse": "Nỗi sợ bị chế giễu là có thật, nhưng hãy nhớ rằng những người bạn thực sự sẽ không cười nhạo bạn. Họ sẽ ở bên và động viên. Nếu có ai đó cười nhạo, điều đó nói lên tính cách của họ, không phải giá trị của bạn. Bạn có thể chọn chia sẻ với một người bạn mà bạn tin tưởng nhất. Hãy bắt đầu bằng câu: 'Mình đang cảm thấy rất xấu hổ vì điểm thi, mình cần tâm sự.' Bạn nghĩ ai sẽ là người phù hợp?",
                    "children": [
                      {
                        "id": "stress_exam_fear_score_shame_deep2",
                        "userShare": "Tôi không có ai thân, tôi cảm thấy cô đơn",
                        "botResponse": "Cảm giác cô đơn khi đối diện với xấu hổ càng làm nặng thêm gánh nặng. Nhưng bạn có biết rằng nhiều người cũng cảm thấy cô đơn? Bạn có thể tham gia các nhóm hỗ trợ trực tuyến, nơi có những bạn cùng cảnh ngộ. Hoặc bạn có thể viết nhật ký, vẽ tranh, sáng tác nhạc để giải tỏa. Nghệ thuật là cách thể hiện cảm xúc mà không sợ bị đánh giá. Bạn có sở thích nào không?"
                      }
                    ]
                  },
                  {
                    "id": "stress_exam_fear_score_shame_deep1_alt",
                    "userShare": "Tôi xấu hổ đến mức không muốn đi học",
                    "botResponse": "Cảm giác muốn trốn tránh là phản ứng tự nhiên, nhưng trốn tránh lâu dài sẽ khiến bạn tụt hậu và cô lập hơn. Hãy thử nghĩ: điểm kém chỉ là một phần nhỏ trong cuộc đời học sinh. Ngày hôm sau, mọi người sẽ quên nhanh thôi. Bạn có thể chuẩn bị tinh thần bằng cách tự nhủ: 'Mình đã cố gắng, và mình sẽ làm tốt hơn lần sau.' Nếu quá khó, hãy xin phép nghỉ một ngày để lấy lại cân bằng, nhưng đừng để nó kéo dài. Bạn có thể làm gì để tự chăm sóc mình trong ngày nghỉ đó?"
                  }
                ]
              }
            ]
          },
          {
            "id": "stress_exam_preparation",
            "userShare": "Tôi không biết cách ôn tập hiệu quả",
            "botResponse": "Việc không biết cách ôn tập khiến bạn thêm căng thẳng, nhưng đây là điều có thể cải thiện. Hãy cùng khám phá những phương pháp học tập thông minh, phù hợp với từng người. Bạn thường gặp khó khăn gì nhất khi học? Trì hoãn, thiếu tập trung hay cảm thấy quá tải?",
            "children": [
              {
                "id": "stress_exam_prep_procrastination",
                "userShare": "Tôi luôn để việc học đến phút cuối, không thể dừng được",
                "botResponse": "Trì hoãn là một vòng lặp tâm lý khó thoát: bạn sợ thất bại, nên tránh học, rồi cảm thấy tội lỗi, căng thẳng càng tăng. Để phá vỡ vòng lặp, hãy thử chia nhỏ việc học thành từng phần rất nhỏ, chỉ 5-10 phút mỗi lần. Bắt đầu bằng việc mở sách ra, đọc một đoạn ngắn. Khi bạn đã bắt đầu, động lực sẽ dần đến. Bạn cũng có thể tự thưởng cho mình sau mỗi phần nhỏ hoàn thành. Bạn nghĩ sao nếu thử áp dụng ngay hôm nay?",
                "children": [
                  {
                    "id": "stress_exam_prep_procrastination_deeper",
                    "userShare": "Tôi đã thử nhưng vẫn không thể, tôi cảm thấy mình vô dụng",
                    "botResponse": "Cảm giác vô dụng khi không thể vượt qua trì hoãn là dấu hiệu của sự tự trách quá mức. Hãy nhớ rằng thay đổi thói quen cần thời gian, và mỗi bước nhỏ đều đáng ghi nhận. Thay vì tự mắng, hãy tự hỏi: 'Điều gì khiến mình sợ hãi khi học môn này?' Có thể bạn sợ không hiểu bài, hoặc sợ điểm kém. Hãy đối diện với nỗi sợ đó bằng cách tìm sự giúp đỡ từ bạn bè, thầy cô. Bạn xứng đáng được hỗ trợ.",
                    "children": [
                      {
                        "id": "stress_exam_prep_procrastination_deep2",
                        "userShare": "Tôi sợ hỏi thầy cô vì ngại, sợ bị mắng",
                        "botResponse": "Nỗi sợ bị thầy cô đánh giá là rất phổ biến. Nhưng hầu hết thầy cô đều vui khi thấy học sinh chủ động hỏi. Bạn có thể chọn cách hỏi sau giờ học, hoặc gửi email. Nếu vẫn ngại, hãy rủ một bạn cùng đi. Hoặc bạn có thể tìm các kênh học trực tuyến, video bài giảng. Quan trọng là bạn không để nỗi sợ cản bước. Bạn có môn học nào đặc biệt khó không?",
                        "children": [
                          {
                            "id": "stress_exam_prep_procrastination_deep3_math",
                            "userShare": "Môn Toán là khó nhất với tôi",
                            "botResponse": "Toán có thể là thử thách với nhiều người. Hãy thử học theo từng dạng bài, bắt đầu từ cơ bản. Chia nhỏ mục tiêu: hôm nay chỉ cần hiểu một công thức và làm 2 bài áp dụng. Quan trọng là kiên nhẫn với bản thân. Mỗi ngày một ít, bạn sẽ tiến bộ. Bạn có thể đặt mục tiêu hôm nay làm được 2 bài tập cơ bản không?"
                          },
                          {
                            "id": "stress_exam_prep_procrastination_deep3_literature",
                            "userShare": "Môn Văn làm tôi rất áp lực",
                            "botResponse": "Văn không chỉ là viết hay, mà là hiểu và cảm nhận. Bạn có thể bắt đầu bằng việc tóm tắt ý chính của tác phẩm, sau đó viết từng đoạn ngắn thay vì cả bài dài. Hãy thử lập dàn ý trước khi viết. Bạn có thể bắt đầu bằng việc viết một đoạn mở bài khoảng 5–7 câu hôm nay được không?"
                          },
                          {
                            "id": "stress_exam_prep_procrastination_deep3_english",
                            "userShare": "Tiếng Anh khiến tôi mất tự tin",
                            "botResponse": "Mất tự tin với Tiếng Anh là điều rất phổ biến. Bạn có thể chia nhỏ: mỗi ngày học 5 từ vựng và đặt câu với chúng. Nghe một đoạn ngắn và không cần hiểu hết 100%. Quan trọng là đều đặn. Hôm nay bạn có thể học 5 từ và dùng chúng trong 5 câu đơn giản không?"
                          },
                          {
                            "id": "stress_exam_prep_procrastination_deep3_physics",
                            "userShare": "Môn Lý làm tôi rối",
                            "botResponse": "Vật Lý thường khó vì có nhiều công thức. Hãy thử hiểu bản chất trước khi học thuộc. Bạn có thể vẽ sơ đồ hoặc ghi công thức ra giấy và dán ở góc học tập. Hôm nay bạn có thể chọn 1 dạng bài và luyện 3 câu tương tự không?"
                          },
                          {
                            "id": "stress_exam_prep_procrastination_deep3_chemistry",
                            "userShare": "Hóa học khiến tôi sợ",
                            "botResponse": "Hóa học dễ gây áp lực vì nhiều phản ứng và phương trình. Bạn có thể học theo nhóm chất hoặc từng dạng bài thay vì học lan man. Viết lại phương trình nhiều lần cũng giúp ghi nhớ tốt hơn. Bạn có thể dành 20 phút hôm nay chỉ để ôn một dạng phản ứng không?"
                          },
                          {
                            "id": "stress_exam_prep_procrastination_deep3_biology",
                            "userShare": "Sinh học có quá nhiều thứ phải nhớ",
                            "botResponse": "Sinh học nhiều kiến thức nhưng bạn có thể học bằng sơ đồ tư duy hoặc vẽ lại quá trình bằng hình ảnh. Khi hiểu cơ chế, việc nhớ sẽ nhẹ nhàng hơn. Hôm nay bạn có thể tóm tắt một bài thành 5 ý chính không?"
                          },
                          {
                            "id": "stress_exam_prep_procrastination_deep3_history",
                            "userShare": "Lịch sử rất khó nhớ",
                            "botResponse": "Lịch sử dễ nhầm vì nhiều mốc thời gian. Bạn có thể học theo dòng sự kiện như một câu chuyện thay vì học rời rạc. Thử tạo một timeline ngắn cho một giai đoạn. Hôm nay bạn có thể ghi nhớ 3 mốc thời gian quan trọng không?"
                          },
                          {
                            "id": "stress_exam_prep_procrastination_deep3_geography",
                            "userShare": "Địa lý làm tôi chóng mặt",
                            "botResponse": "Địa lý sẽ dễ hơn nếu bạn nhìn bản đồ và hình ảnh thay vì chỉ đọc chữ. Bạn có thể chia nhỏ: hôm nay chỉ học một khu vực hoặc một dạng biểu đồ. Bạn có thể thử làm 1 bài biểu đồ cơ bản trước không?"
                          }
                        ]
                      },
                      {
                        "id": "stress_exam_prep_procrastination_deep2_alt",
                        "userShare": "Tôi thấy mình lười, không có kỷ luật",
                        "botResponse": "Đừng vội gán cho mình cái mác 'lười'. Trì hoãn thường là do thiếu động lực hoặc quá tải, không phải do bản tính. Hãy thử tìm cách tạo động lực: kết hợp học với điều bạn thích, như nghe nhạc không lời, học ở quán cà phê. Bạn cũng có thể lập bảng theo dõi tiến độ và dán ở nơi dễ thấy. Mỗi khi hoàn thành một việc, hãy đánh dấu. Nhìn vào bảng đầy dấu tick sẽ tạo động lực. Bạn muốn thử cách nào?"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "stress_exam_prep_perfectionism",
                "userShare": "Tôi muốn mọi thứ phải hoàn hảo, nếu không thì buồn",
                "botResponse": "Chủ nghĩa hoàn hảo có thể khiến bạn kiệt sức vì bạn đặt ra tiêu chuẩn quá cao. Thực tế, không ai hoàn hảo cả, và việc chấp nhận sai sót là một phần của học tập. Hãy thử đặt mục tiêu 'đủ tốt' thay vì 'hoàn hảo'. Ví dụ, thay vì học thuộc lòng cả chương, hãy hiểu ý chính. Khi bạn cho phép mình mắc lỗi, bạn sẽ học được nhiều hơn và bớt căng thẳng. Bạn có thể kể một lần bạn đã mắc lỗi và học được điều gì đó không?",
                "children": [
                  {
                    "id": "stress_exam_prep_perfectionism_deeper",
                    "userShare": "Tôi sợ nếu không hoàn hảo, mọi người sẽ đánh giá tôi",
                    "botResponse": "Nỗi sợ bị đánh giá là một trong những nguyên nhân sâu xa của chủ nghĩa hoàn hảo. Nhưng hãy thử nghĩ: bạn có thường xuyên đánh giá người khác một cách khắt khe như bạn nghĩ họ đánh giá bạn không? Thực tế, mọi người thường bận tâm với cuộc sống của họ hơn là để ý đến bạn. Hãy tập trung vào quá trình học hỏi của bản thân thay vì lo lắng về ánh mắt người ngoài. Bạn đang làm điều tốt nhất cho mình, điều đó đã đủ rồi.",
                    "children": [
                      {
                        "id": "stress_exam_prep_perfectionism_deep2",
                        "userShare": "Nhưng tôi thấy mình không thể chấp nhận sai sót, nó làm tôi khó chịu",
                        "botResponse": "Cảm giác khó chịu khi mắc lỗi là tự nhiên, nhưng bạn có thể học cách đối diện với nó. Hãy thử viết ra một lỗi bạn đã mắc và tự hỏi: 'Liệu lỗi này có quan trọng sau 1 năm nữa không?' Thường thì câu trả lời là không. Bạn cũng có thể tập thói quen tự nói: 'Mình đã học được điều gì từ lỗi này?' Biến lỗi thành bài học. Bạn có thể áp dụng ngay với một lỗi nhỏ hôm nay."
                      }
                    ]
                  },
                  {
                    "id": "stress_exam_prep_perfectionism_deep2_alt",
                    "userShare": "Tôi luôn so sánh mình với bạn giỏi nhất lớp",
                    "botResponse": "So sánh với người khác là con đường nhanh nhất dẫn đến tự ti. Mỗi người có điểm mạnh riêng, và bạn không thể biết hết khó khăn của họ. Thay vì so sánh, hãy so sánh với chính mình của ngày hôm qua. Bạn đã tiến bộ hơn chưa? Hãy ghi nhận những tiến bộ dù nhỏ. Bạn có thể lập một nhật ký học tập để theo dõi sự phát triển của bản thân."
                  }
                ]
              },
              {
                "id": "stress_exam_prep_focus",
                "userShare": "Tôi không thể tập trung, dễ bị phân tâm khi học",
                "botResponse": "Mất tập trung thường là dấu hiệu của căng thẳng hoặc quá tải. Bộ não bạn đang lo lắng nên nó liên tục nhảy từ suy nghĩ này sang suy nghĩ khác. Hãy thử kỹ thuật Pomodoro: học 25 phút, nghỉ 5 phút. Trong lúc học, hãy tắt điện thoại và các thiết bị gây xao nhãng. Nếu tâm trí bạn lang thang, hãy nhẹ nhàng đưa nó trở lại. Đừng trách mình, đó là điều bình thường. Bạn cũng có thể thử thiền vài phút trước khi học để tĩnh tâm. Bạn đã từng thử phương pháp nào chưa?",
                "children": [
                  {
                    "id": "stress_exam_prep_focus_deeper",
                    "userShare": "Tôi lo lắng đến nỗi không thể ngồi yên, tim đập nhanh",
                    "botResponse": "Khi lo lắng đến mức có triệu chứng thể chất như tim đập nhanh, đó là lúc cơ thể bạn đang ở trạng thái báo động. Hãy dừng lại vài phút để hít thở sâu: hít vào 4 giây, giữ 4 giây, thở ra 4 giây. Lặp lại vài lần. Bạn cũng có thể uống một cốc nước mát, đi lại nhẹ nhàng. Nếu cảm giác quá mạnh, hãy cho phép mình nghỉ ngơi hôm đó. Sức khỏe tinh thần quan trọng hơn một buổi học. Khi bạn bình tĩnh hơn, hãy quay lại với việc học với một tâm thế nhẹ nhàng hơn.",
                    "children": [
                      {
                        "id": "stress_exam_prep_focus_deep2",
                        "userShare": "Tôi sợ nếu nghỉ ngơi thì sẽ tụt lại phía sau",
                        "botResponse": "Đó là nỗi lo chính đáng, nhưng nghỉ ngơi đúng cách giúp bạn học hiệu quả hơn khi quay lại. Giống như vận động viên cần nghỉ giữa hiệp, não bạn cũng vậy. Hãy thử lên lịch học có các khoảng nghỉ ngắn, và trong lúc nghỉ, làm điều gì đó thư giãn như nghe nhạc, vươn vai. Bạn sẽ thấy mình tập trung hơn. Bạn có thể thử một buổi học với Pomodoro và tự đánh giá."
                      },
                      {
                        "id": "stress_exam_prep_focus_deep2_alt",
                        "userShare": "Tôi không thể kiểm soát suy nghĩ, cứ nghĩ linh tinh",
                        "botResponse": "Suy nghĩ lang thang là hiện tượng tự nhiên. Thay vì cố kìm nén, hãy thử viết chúng ra giấy để 'giải phóng' não. Ví dụ, nếu bạn đang lo lắng về việc khác, hãy viết nhanh ra và hẹn sẽ xử lý sau. Sau đó quay lại học. Bạn cũng có thể tập chánh niệm: ngồi yên vài phút, tập trung vào hơi thở, khi tâm trí đi lang thang thì nhẹ nhàng kéo về. Luyện tập mỗi ngày sẽ cải thiện sự tập trung."
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "stress_exam_physical_symptoms",
            "userShare": "Tôi có các triệu chứng thể chất: tim đập nhanh, tay run, tiêu chảy",
            "botResponse": "Những triệu chứng này rất thực tế - căng thẳng tác động trực tiếp lên cơ thể bạn. Đó là phản ứng 'chiến đấu hay bỏ chạy' của hệ thần kinh. Khi bạn lo lắng, cơ thể tiết ra adrenaline khiến tim đập nhanh, tay run, và tiêu hóa bị ảnh hưởng. Điều quan trọng là bạn nhận ra đó chỉ là phản ứng sinh lý, không nguy hiểm. Hãy thử các bài tập thư giãn cơ bắp hoặc hít thở sâu. Nếu triệu chứng kéo dài, bạn nên trao đổi với bác sĩ hoặc chuyên gia tâm lý để được hỗ trợ. Bạn có muốn mình hướng dẫn một bài tập thư giãn không?",
            "children": [
              {
                "id": "stress_exam_physical_symptoms_deeper",
                "userShare": "Tôi sợ mình bị bệnh nặng, tim đập nhanh làm tôi hoảng",
                "botResponse": "Cảm giác sợ hãi vì tim đập nhanh có thể tạo ra vòng lặp: bạn sợ nên tim càng nhanh hơn. Hãy nhớ rằng tim đập nhanh vì lo lắng là vô hại, nó sẽ tự điều chỉnh khi bạn bình tĩnh. Bạn có thể thử kỹ thuật 'neo đậu' bằng cách đặt tay lên ngực, cảm nhận nhịp tim và nói thầm: 'Đây chỉ là lo lắng, nó sẽ qua'. Nếu bạn vẫn lo, hãy đi khám để yên tâm hơn. Nhưng đừng để nỗi sợ kiểm soát bạn.",
                "children": [
                  {
                    "id": "stress_exam_physical_symptoms_deep2",
                    "userShare": "Tôi đã đi khám, bác sĩ bảo không sao, nhưng tôi vẫn lo",
                    "botResponse": "Điều này rất phổ biến ở người có lo âu. Lý trí biết là ổn, nhưng cảm xúc vẫn sợ. Hãy tập chấp nhận cảm giác đó, đừng chống lại. Khi cảm giác lo âu xuất hiện, hãy nói: 'Ừ, mình đang lo, nhưng mình biết nó sẽ qua.' Và tập trung vào hơi thở. Dần dần, não sẽ học rằng không có nguy hiểm thực sự. Bạn cũng có thể tập thể dục nhẹ để giải phóng năng lượng dư thừa."
                  },
                  {
                    "id": "stress_exam_physical_symptoms_deep2_alt",
                    "userShare": "Tôi sợ mình sẽ ngất xỉu vì tim đập nhanh",
                    "botResponse": "Cảm giác sắp ngất là do thở quá nhanh (tăng thông khí), làm giảm CO2 trong máu. Thực tế, bạn rất khó ngất vì lo âu vì huyết áp không tụt. Khi cảm thấy chóng mặt, hãy thở chậm lại, hoặc thở vào một túi giấy (nếu có) để cân bằng khí. Hãy ngồi xuống, cúi đầu giữa hai đầu gối nếu cần. Bạn sẽ thấy dễ chịu hơn sau vài phút."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "stress_family",
        "userShare": "Gia đình áp lực quá nhiều cho tôi",
        "botResponse": "Áp lực từ gia đình thực sự rất nặng nề, như thể bạn đang mang một gánh nặng vô hình. Mình hiểu cảm giác đó. Bạn có thể kể rõ hơn về những áp lực đó không? Đó là kỳ vọng quá cao, so sánh với người khác, hay sự kiểm soát? Mỗi vấn đề sẽ có cách đối diện khác nhau.",
        "children": [
          {
            "id": "stress_family_expectation",
            "userShare": "Cha mẹ kỳ vọng tôi học giỏi tất cả các môn",
            "botResponse": "Kỳ vọng quá cao từ cha mẹ có thể khiến bạn cảm thấy như mình đang chạy marathon không đích đến. Bạn có thể thấy mình cố gắng mãi nhưng không bao giờ đủ. Điều quan trọng là bạn nhận ra giới hạn của bản thân và học cách đặt ranh giới. Hãy thử nói chuyện với cha mẹ về những gì bạn có thể làm và những gì quá sức. Bạn có thể bắt đầu bằng một câu: 'Con hiểu ba mẹ muốn con học tốt, nhưng con đang rất căng thẳng. Con cần sự hỗ trợ hơn là áp lực.' Bạn đã từng thử nói chuyện như vậy chưa?",
            "children": [
              {
                "id": "stress_family_exp_pressure",
                "userShare": "Tôi cảm thấy áp lực luôn luôn từ cha mẹ, chẳng bao giờ đủ",
                "botResponse": "Cảm giác 'chẳng bao giờ đủ' là một vòng lặp tâm lý đau đớn. Bạn cố gắng đạt được kết quả, nhưng cha mẹ lại nâng kỳ vọng lên cao hơn, khiến bạn mệt mỏi. Hãy tự nhủ: 'Mình đã làm hết sức, và điều đó là đủ.' Giá trị của bạn không nằm ở việc đáp ứng mọi kỳ vọng. Bạn có thể tìm một người trong gia đình (cô, dì, anh chị) để chia sẻ, họ có thể là cầu nối giúp cha mẹ hiểu bạn hơn. Nếu không, hãy viết nhật ký để giải tỏa.",
                "children": [
                  {
                    "id": "stress_family_exp_pressure_deep1",
                    "userShare": "Tôi đã viết nhật ký, nhưng vẫn thấy không thay đổi gì",
                    "botResponse": "Viết nhật ký là cách để bạn trút bỏ cảm xúc, nhưng nó không giải quyết được nguyên nhân gốc rễ. Để thay đổi tình hình, bạn cần hành động. Hãy thử viết ra những gì bạn muốn nói với cha mẹ, rồi tập nói trước gương. Bạn cũng có thể nhờ một người thân làm trung gian. Đôi khi cha mẹ cần thấy bạn trưởng thành qua cách bạn trình bày vấn đề. Bạn có thể chuẩn bị một cuộc nói chuyện nhẹ nhàng vào bữa tối."
                  },
                  {
                    "id": "stress_family_exp_pressure_deep1_alt",
                    "userShare": "Tôi sợ nếu nói ra, cha mẹ sẽ buồn và nghĩ tôi hư",
                    "botResponse": "Nỗi sợ làm cha mẹ buồn là chính đáng, nhưng im lặng không phải là cách bảo vệ họ. Thực tế, khi bạn chịu đựng một mình, bạn có thể kiệt sức và kết quả học tập đi xuống, khiến họ càng buồn hơn. Nói ra là để cả hai cùng thấu hiểu. Hãy chọn cách nói nhẹ nhàng, tập trung vào cảm xúc của bạn thay vì đổ lỗi. Ví dụ: 'Con cảm thấy áp lực khi ba mẹ kỳ vọng quá nhiều, con sợ làm ba mẹ thất vọng.' Bạn thấy cách nói đó có khả thi không?"
                  }
                ]
              },
              {
                "id": "stress_family_exp_grades",
                "userShare": "Cha mẹ quan tâm nhiều hơn điểm số là tôi là ai",
                "botResponse": "Khi cha mẹ chỉ nhìn vào điểm số, bạn có thể cảm thấy mình vô hình. Bạn là một con người với nhiều khía cạnh: tính cách, sở thích, ước mơ. Hãy thử khéo léo giới thiệu cho cha mẹ thấy những điều bạn yêu thích ngoài học tập, ví dụ như một môn thể thao, năng khiếu nghệ thuật, hay những việc tốt bạn làm. Có thể họ sẽ dần nhận ra con mình đáng quý thế nào. Bạn cũng nên tự hào về bản thân mình, dù cha mẹ chưa thấy hết.",
                "children": [
                  {
                    "id": "stress_family_exp_grades_deep1",
                    "userShare": "Tôi rất thích vẽ, nhưng cha mẹ bảo mất thời gian",
                    "botResponse": "Điều này thật khó, khi đam mê bị coi nhẹ. Nhưng đừng từ bỏ sở thích của mình. Hãy thử giải thích rằng vẽ giúp bạn thư giãn và cân bằng cảm xúc, từ đó học tốt hơn. Bạn có thể đề xuất một lịch trình: hoàn thành bài tập trước, sau đó dành thời gian vẽ. Nếu có thể, hãy tham gia một câu lạc bộ mỹ thuật ở trường, nơi bạn có thể phát triển và có thành tích để cha mẹ thấy giá trị."
                  },
                  {
                    "id": "stress_family_exp_grades_deep1_alt",
                    "userShare": "Tôi không có năng khiếu gì đặc biệt, chỉ thích chơi game",
                    "botResponse": "Chơi game cũng có thể là một sở thích, nhưng nếu cha mẹ phản đối, hãy tìm cách biến nó thành điều tích cực. Ví dụ, bạn có thể tìm hiểu về thiết kế game, lập trình, hoặc tham gia các giải đấu game lành mạnh. Hãy cho cha mẹ thấy bạn có thể cân bằng giữa game và học. Đặt ra giới hạn thời gian chơi và tuân thủ. Khi cha mẹ thấy bạn có trách nhiệm, họ sẽ dần thoải mái hơn."
                  }
                ]
              }
            ]
          },
          {
            "id": "stress_family_comparison",
            "userShare": "Cha mẹ so sánh tôi với anh chị",
            "botResponse": "Bị so sánh với anh chị em trong nhà là một trải nghiệm tổn thương sâu sắc. Nó khiến bạn cảm thấy mình không được công nhận là một cá thể riêng biệt. Hãy nhớ rằng mỗi người đều có điểm mạnh và con đường riêng. Anh chị của bạn có thể giỏi môn này, nhưng bạn có thể giỏi môn khác hoặc có những phẩm chất khác. Hãy tập trung phát triển bản thân thay vì so sánh. Bạn có thể nói với cha mẹ: 'Con hiểu anh/chị giỏi, nhưng con cũng có những điểm mạnh riêng. Con mong ba mẹ nhìn nhận con như chính con.'",
            "children": [
              {
                "id": "stress_family_comp_sibling",
                "userShare": "Anh/chị luôn giỏi hơn, tôi cảm thấy như một thất bại",
                "botResponse": "Cảm giác thất bại khi so sánh với anh chị là một gánh nặng tâm lý. Nhưng hãy thử nhìn xa hơn: bạn không cần phải trở thành bản sao của họ. Thành công của họ không làm giảm giá trị của bạn. Hãy tự hỏi: 'Điều gì làm mình hạnh phúc? Mình muốn phát triển theo hướng nào?' Khi bạn theo đuổi đam mê của riêng mình, bạn sẽ tìm thấy niềm vui và sự tự tin. Nếu có thể, hãy trò chuyện với anh chị, họ có thể là người ủng hộ bạn.",
                "children": [
                  {
                    "id": "stress_family_comp_sibling_deep1",
                    "userShare": "Anh tôi luôn đạt điểm cao, còn tôi chỉ trung bình",
                    "botResponse": "Điểm trung bình không phải là thất bại. Mỗi người có một năng lực khác nhau. Có thể anh bạn có thế mạnh về học thuật, còn bạn có thế mạnh về kỹ năng xã hội, sáng tạo, hoặc thể thao. Hãy tìm ra điều bạn làm tốt và phát triển nó. Bạn cũng có thể học hỏi từ anh cách học tập hiệu quả, nhưng đừng so sánh. Hãy tự hào về những tiến bộ của chính mình."
                  },
                  {
                    "id": "stress_family_comp_sibling_deep1_alt",
                    "userShare": "Tôi ghen tị với anh chị và cảm thấy có lỗi",
                    "botResponse": "Ghen tị là cảm xúc tự nhiên, không có gì xấu hổ. Quan trọng là bạn nhận ra nó và không để nó điều khiển hành vi. Hãy thử biến ghen tị thành động lực: học hỏi những gì anh chị làm được, nhưng theo cách của riêng bạn. Và hãy tha thứ cho bản thân vì cảm xúc đó. Bạn xứng đáng được yêu thương vô điều kiện."
                  }
                ]
              },
              {
                "id": "stress_family_comp_jealousy",
                "userShare": "Tôi cảm thấy ganh tỵ, sợ hãi anh/chị sẽ yêu bạn hơn",
                "botResponse": "Ganh tỵ với anh chị là cảm giác rất tự nhiên, nhưng nó cũng cho thấy bạn khao khát tình yêu thương và sự công nhận. Trong nhiều gia đình, cha mẹ yêu thương tất cả con cái theo cách riêng. Tuy nhiên, nếu bạn cảm thấy mình không nhận được đủ tình cảm, cảm giác đó cũng rất thật và đáng được lắng nghe. Trái tim cha mẹ có thể yêu thương tất cả con cái một cách trọn vẹn. Hãy thử nhìn vào những khoảnh khắc bạn nhận được tình cảm từ cha mẹ, dù nhỏ. Nếu bạn cảm thấy thiếu thốn, hãy chủ động tạo cơ hội gần gũi với cha mẹ, chia sẻ những điều bạn thích. Bạn xứng đáng được yêu thương.",
                "children": [
                  {
                    "id": "stress_family_comp_jealousy_deep1",
                    "userShare": "Mỗi lần cha mẹ khen anh chị, tôi thấy chạnh lòng",
                    "botResponse": "Cảm giác đó rất dễ hiểu. Khi cha mẹ khen người khác, bạn có thể cảm thấy mình bị lãng quên. Hãy thử nói với cha mẹ một cách nhẹ nhàng: 'Con cũng muốn được khen khi làm tốt.' Đôi khi cha mẹ vô tình không nhận ra. Bạn cũng có thể tự tạo cơ hội để thể hiện bản thân. Và hãy nhớ, bạn có giá trị riêng, không cần phải được khen mới biết điều đó."
                  }
                ]
              }
            ]
          },
          {
            "id": "stress_family_control",
            "userShare": "Cha mẹ kiểm soát quá nhiều, không cho tôi quyền tự do",
            "botResponse": "Kiểm soát quá mức từ cha mẹ có thể khiến bạn cảm thấy ngột ngạt, mất đi cơ hội học cách tự lập. Điều này thường xuất phát từ tình yêu thương nhưng lại trở thành áp lực. Bạn có thể thử thiết lập ranh giới bằng cách trò chuyện nhẹ nhàng, bày tỏ mong muốn được tự quyết một số việc nhỏ, như giờ học, sở thích cá nhân. Hãy chứng minh rằng bạn có trách nhiệm. Ví dụ: 'Con muốn tự sắp xếp thời gian học, nếu con không ổn, con sẽ nhờ ba mẹ giúp.' Từng bước nhỏ sẽ giúp cha mẹ tin tưởng hơn. Bạn có thể kể một việc bạn muốn tự làm không?",
            "children": [
              {
                "id": "stress_family_control_deeper",
                "userShare": "Tôi muốn tự quyết định nhưng cha mẹ không bao giờ lắng nghe",
                "botResponse": "Cảm giác không được lắng nghe thật sự rất bất lực. Trong trường hợp đó, hãy kiên nhẫn và tìm thời điểm thích hợp để nói chuyện. Đôi khi cha mẹ cần thấy bạn trưởng thành qua hành động thay vì lời nói. Hãy bắt đầu bằng những quyết định nhỏ trong tầm kiểm soát, như cách bài trí phòng, lựa chọn hoạt động ngoại khóa. Khi họ thấy bạn làm tốt, họ sẽ nới lỏng dần. Nếu áp lực quá lớn, bạn có thể tìm sự hỗ trợ từ người thân khác hoặc tham vấn tâm lý học đường.",
                "children": [
                  {
                    "id": "stress_family_control_deep2",
                    "userShare": "Tôi đã thử tự quyết việc nhỏ nhưng cha mẹ vẫn can thiệp",
                    "botResponse": "Điều đó cho thấy cha mẹ bạn có thể có nỗi lo sâu xa về sự an toàn của bạn. Hãy thử trò chuyện để hiểu nỗi lo của họ. Ví dụ: 'Ba mẹ lo lắng điều gì khi để con tự làm việc này?' Khi bạn hiểu được nỗi lo, bạn có thể trấn an họ bằng cách đưa ra giải pháp. Ví dụ, nếu họ lo bạn thức khuya, hãy cam kết tắt điện thoại trước 11 giờ. Sự thấu hiểu hai chiều sẽ xây dựng lòng tin."
                  },
                  {
                    "id": "stress_family_control_deep2_alt",
                    "userShare": "Tôi cảm thấy tức giận và muốn chống đối",
                    "botResponse": "Cảm giác tức giận là phản ứng tự nhiên khi bị kiểm soát. Nhưng chống đối có thể làm tình hình căng thẳng hơn. Thay vào đó, hãy hít thở sâu và tìm cách thể hiện cảm xúc một cách xây dựng. Bạn có thể viết ra những gì bạn cảm thấy, rồi sau đó bình tĩnh nói với cha mẹ. Hãy nhấn mạnh rằng bạn muốn hợp tác, không phải chống đối. Ví dụ: 'Con hiểu ba mẹ muốn tốt cho con, nhưng cách này làm con rất áp lực. Con mong chúng ta cùng tìm ra cách.'"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "stress_friends",
        "userShare": "Tôi có vấn đề với bạn bè",
        "botResponse": "Mối quan hệ bạn bè rất quan trọng ở lứa tuổi này, và khi gặp trục trặc, bạn có thể cảm thấy cô đơn và tổn thương. Hãy chia sẻ để mình hiểu rõ hơn: đó là mâu thuẫn, cảm giác bị phản bội, hay khó khăn trong việc kết bạn?",
        "children": [
          {
            "id": "stress_friends_conflict",
            "userShare": "Bạn thân của tôi nói xấu tôi phía sau lưng",
            "botResponse": "Bị bạn thân nói xấu sau lưng là một trải nghiệm đau lòng, nó làm rạn nứt lòng tin. Bạn có thể cảm thấy tức giận, buồn bã, và hoài nghi về tình bạn. Trước hết, hãy cho phép mình có những cảm xúc đó. Sau đó, bạn có thể cân nhắc việc nói chuyện trực tiếp với bạn ấy, bày tỏ cảm nhận của mình một cách bình tĩnh: 'Mình nghe nói bạn đã nói điều đó về mình, mình cảm thấy rất buồn.' Lắng nghe phản hồi của họ, có thể có hiểu lầm. Dù thế nào, bạn cũng học được cách bảo vệ bản thân và chọn bạn mà chơi.",
            "children": [
              {
                "id": "stress_friends_betrayal",
                "userShare": "Tôi cảm thấy không thể tin ai, sợ tất cả bạn bè",
                "botResponse": "Sau một lần bị phản bội, bạn có thể xây dựng bức tường ngăn cách với tất cả mọi người. Điều này dễ hiểu, nhưng hãy nhớ rằng không phải ai cũng sẽ làm tổn thương bạn. Có những người bạn đáng tin cậy ngoài kia. Hãy dành thời gian để quan sát và tìm những người bạn có cùng giá trị, biết lắng nghe và tôn trọng. Bạn có thể bắt đầu bằng những cuộc trò chuyện nhỏ, chia sẻ dần dần. Niềm tin cần thời gian để xây dựng lại. Bạn có một người bạn nào khác mà bạn cảm thấy an toàn hơn không?",
                "children": [
                  {
                    "id": "stress_friends_betrayal_deep1",
                    "userShare": "Có một bạn khác khá thân, nhưng tôi sợ lại bị tổn thương",
                    "botResponse": "Nỗi sợ bị tổn thương lần nữa là điều tự nhiên. Hãy thử mở lòng từ từ, chia sẻ những điều nhỏ trước, xem phản ứng của họ. Nếu họ tôn trọng và lắng nghe, đó là dấu hiệu tốt. Bạn cũng có thể quan sát cách họ đối xử với người khác. Tình bạn là một quá trình, và bạn có quyền bảo vệ trái tim mình. Đừng vội vàng, hãy để thời gian chứng minh."
                  },
                  {
                    "id": "stress_friends_betrayal_deep1_alt",
                    "userShare": "Tôi không muốn kết bạn mới, chỉ muốn ở một mình",
                    "botResponse": "Ở một mình đôi khi cũng tốt để chữa lành, nhưng nếu kéo dài, bạn có thể cảm thấy cô đơn hơn. Hãy cho phép bản thân có thời gian để hồi phục, nhưng đừng đóng cửa mãi mãi. Bạn có thể tham gia các hoạt động tập thể mà không cần phải thân thiết ngay, như câu lạc bộ sách, thể thao. Điều đó giúp bạn kết nối nhẹ nhàng, không áp lực."
                  }
                ]
              },
              {
                "id": "stress_friends_guilt",
                "userShare": "Tôi cảm thấy tội lỗi vì sợ bạn bè, muốn tha thứ nhưng không thể",
                "botResponse": "Cảm giác tội lỗi vì không thể tha thứ là một gánh nặng kép. Hãy hiểu rằng tha thứ là một quá trình, không phải là một hành động tức thời. Bạn có quyền giữ khoảng cách để bảo vệ mình. Nếu bạn muốn tha thứ, hãy bắt đầu bằng cách tha thứ cho chính mình vì đã cảm thấy như vậy. Khi nào bạn sẵn sàng, bạn có thể trao đổi với bạn ấy. Nhưng đừng ép buộc bản thân. Quan trọng là bạn học cách đặt ranh giới và chăm sóc cảm xúc của mình trước.",
                "children": [
                  {
                    "id": "stress_friends_guilt_deep1",
                    "userShare": "Tôi vẫn còn giận, nhưng bạn ấy muốn làm hòa",
                    "botResponse": "Giận là cảm xúc chính đáng. Nếu bạn chưa sẵn sàng, hãy nói với bạn ấy rằng bạn cần thêm thời gian. Bạn có thể nói: 'Mình cần thời gian để xử lý cảm xúc, khi nào ổn hơn mình sẽ nói chuyện.' Điều này vừa tôn trọng bản thân vừa cho bạn kia cơ hội. Khi bạn đã bình tĩnh, hãy cân nhắc xem tình bạn có đáng để cứu vãn không."
                  }
                ]
              }
            ]
          },
          {
            "id": "stress_friends_lonely",
            "userShare": "Tôi cảm thấy cô đơn, không có bạn thân",
            "botResponse": "Cô đơn là một cảm giác rất khó chịu, như thể bạn đang đứng giữa đám đông mà không ai thực sự kết nối với bạn. Điều này có thể xảy ra với bất kỳ ai, và nó không có nghĩa là bạn không đáng được yêu mến. Có thể bạn chưa tìm được người bạn đồng điệu, hoặc bạn đang ở trong giai đoạn chuyển tiếp. Hãy thử tham gia các câu lạc bộ, hoạt động ngoại khóa, nơi bạn có thể gặp những người cùng sở thích. Đôi khi tình bạn đến từ những điều bất ngờ. Bạn có sở thích gì không?",
            "children": [
              {
                "id": "stress_friends_lonely_deeper",
                "userShare": "Tôi cảm thấy không ai hiểu tôi, cảm thấy khác biệt",
                "botResponse": "Cảm giác khác biệt và không được hiểu là một nỗi cô đơn sâu sắc. Có thể bạn là người nhạy cảm, có suy nghĩ sâu sắc hơn bạn bè đồng trang lứa. Điều này không xấu, nó là một phần con người bạn. Trên thế giới có rất nhiều người cũng cảm thấy như vậy. Hãy tìm kiếm cộng đồng trực tuyến hoặc ngoài đời thực với những người có cùng mối quan tâm. Bạn cũng có thể thể hiện bản thân qua nghệ thuật, viết lách. Dần dần, bạn sẽ tìm được những người thực sự hiểu bạn.",
                "children": [
                  {
                    "id": "stress_friends_lonely_deep2_reading",
                    "userShare": "Tôi thích đọc sách, nhưng không biết nói chuyện với ai về nó",
                    "botResponse": "Thích đọc sách là một sở thích rất sâu sắc. Bạn không cần phải nói chuyện với quá nhiều người để chia sẻ điều đó. Bạn có thể bắt đầu bằng cách viết vài dòng cảm nhận sau khi đọc xong một cuốn sách. Nếu muốn kết nối, bạn có thể tham gia những nhóm đọc sách nhỏ hoặc diễn đàn về thể loại bạn thích. Đôi khi chỉ cần tìm được một người cùng gu cũng đã đủ rồi."
                  },
                  {
                    "id": "stress_friends_lonely_deep2_music",
                    "userShare": "Tôi thích nghe nhạc một mình",
                    "botResponse": "Nghe nhạc một mình không có gì lạ cả. Âm nhạc giúp bạn hiểu cảm xúc của mình hơn. Nếu muốn chia sẻ, bạn có thể tạo playlist và gửi cho một người bạn thân kèm theo vài lời nhắn về lý do bạn thích bài đó. Chia sẻ cảm xúc qua âm nhạc đôi khi dễ hơn nói trực tiếp."
                  },
                  {
                    "id": "stress_friends_lonely_deep2_drawing",
                    "userShare": "Tôi thích vẽ, nhưng ngại cho người khác xem",
                    "botResponse": "Ngại chia sẻ tác phẩm của mình là điều rất bình thường, vì nó giống như chia sẻ một phần nội tâm. Bạn không cần phải công khai ngay. Có thể bắt đầu bằng việc cho một người bạn tin tưởng xem trước. Hoặc đơn giản là tiếp tục vẽ cho chính mình. Giá trị của việc sáng tạo không phụ thuộc vào số người nhìn thấy nó."
                  },
                  {
                    "id": "stress_friends_lonely_deep2_journaling",
                    "userShare": "Tôi thích viết nhật ký và suy nghĩ một mình",
                    "botResponse": "Viết nhật ký cho thấy bạn có khả năng tự quan sát và hiểu bản thân. Không phải ai cũng làm được điều đó. Nếu bạn muốn kết nối với người khác, bạn có thể thử viết những đoạn ngắn mang tính chia sẻ chung thay vì quá riêng tư. Nhưng nếu bạn thấy thoải mái khi giữ nó cho riêng mình, điều đó hoàn toàn ổn."
                  },
                  {
                    "id": "stress_friends_lonely_deep2_movie",
                    "userShare": "Tôi thích xem phim một mình",
                    "botResponse": "Xem phim một mình giúp bạn tập trung và cảm nhận sâu hơn. Nếu muốn tìm người cùng sở thích, bạn có thể bắt đầu bằng cách hỏi ai đó: 'Bạn có xem phim này chưa?' chỉ vậy thôi cũng đủ mở đầu một cuộc trò chuyện. Bạn không cần phải thay đổi bản thân để hợp với số đông."
                  },
                  {
                    "id": "stress_friends_lonely_deep2_photography",
                    "userShare": "Tôi thích chụp ảnh nhưng không giỏi nói chuyện",
                    "botResponse": "Chụp ảnh là một cách giao tiếp không cần lời. Bạn có thể chia sẻ ảnh kèm một câu mô tả ngắn về cảm xúc lúc chụp. Điều đó đủ để người khác hiểu bạn hơn mà không cần nói quá nhiều."
                  }
                ]
              },
              {
                "id": "stress_friends_social_anxiety",
                "userShare": "Tôi sợ tiếp cận mọi người, lo lắng họ sẽ từ chối tôi",
                "botResponse": "Sợ bị từ chối là một trong những nỗi sợ lớn nhất khi giao tiếp. Nhưng hãy thử nghĩ: nếu bạn không thử, bạn sẽ không bao giờ biết được. Hầu hết mọi người cũng lo lắng như bạn, họ cũng sợ bị từ chối. Hãy bắt đầu bằng những tương tác nhỏ, như một nụ cười, một lời khen. Nếu ai đó từ chối, điều đó không phản ánh giá trị của bạn; có thể họ đang bận hoặc cũng đang lo lắng. Hãy kiên nhẫn với bản thân, mỗi bước nhỏ đều là tiến bộ.",
                "children": [
                  {
                    "id": "stress_friends_social_anxiety_deep1",
                    "userShare": "Tôi đã thử cười với một bạn, nhưng bạn ấy không đáp lại",
                    "botResponse": "Có thể bạn ấy không để ý hoặc đang có chuyện buồn. Đừng vội kết luận là họ từ chối bạn. Hãy thử lại lần khác, hoặc với người khác. Giao tiếp là kỹ năng cần luyện tập. Bạn cũng có thể thử bắt chuyện bằng một câu hỏi đơn giản về bài tập. Dần dần, bạn sẽ thấy tự tin hơn."
                  },
                  {
                    "id": "stress_friends_social_anxiety_deep1_alt",
                    "userShare": "Tôi đỏ mặt và nói lắp khi giao tiếp, càng ngại hơn",
                    "botResponse": "Đỏ mặt và nói lắp là phản ứng của cơ thể khi lo lắng. Điều này càng làm bạn tự ti. Hãy thở sâu trước khi nói, và nhớ rằng hầu hết mọi người không để ý đến những chi tiết đó như bạn nghĩ. Họ cũng đang tập trung vào cuộc trò chuyện. Bạn có thể luyện tập nói trước gương, hoặc với người thân. Dần dần, bạn sẽ kiểm soát tốt hơn."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "stress_future",
        "userShare": "Tôi lo lắng về tương lai, không biết phải làm gì",
        "botResponse": "Lo lắng về tương lai là điều rất phổ biến ở tuổi học sinh, khi bạn phải đối mặt với nhiều lựa chọn quan trọng. Cảm giác mơ hồ và bất an có thể khiến bạn mất ngủ. Hãy cùng nhau khám phá những nỗi lo cụ thể của bạn: là về nghề nghiệp, áp lực từ gia đình, hay sợ không đáp ứng được kỳ vọng?",
        "children": [
          {
            "id": "stress_future_career",
            "userShare": "Tôi không biết muốn chọn ngành gì",
            "botResponse": "Không biết chọn ngành gì là điều bình thường, vì bạn còn trẻ và chưa có nhiều trải nghiệm. Nhiều người trưởng thành cũng từng thay đổi ngành nghề. Điều quan trọng là bạn hiểu rõ bản thân: sở thích, điểm mạnh, giá trị của bạn là gì? Bạn có thể làm các bài trắc nghiệm hướng nghiệp, nói chuyện với thầy cô, người đi trước. Đừng vội vàng, hãy cho mình thời gian khám phá. Bạn thích làm gì trong thời gian rảnh? Điều đó có thể gợi ý về nghề nghiệp tương lai.",
            "children": [
              {
                "id": "stress_future_career_lost",
                "userShare": "Tôi cảm thấy mất mát, không biết bước đi tiếp theo",
                "botResponse": "Cảm giác mất mát và lạc lối là một cuộc khủng hoảng bản sắc tuổi trẻ. Bạn không cần phải có tất cả câu trả lời ngay bây giờ. Hãy tập trung vào hiện tại: bạn có thể thử nghiệm qua các hoạt động ngoại khóa, công việc tình nguyện, học thêm kỹ năng mới. Mỗi trải nghiệm sẽ giúp bạn hiểu mình hơn. Hãy nhớ rằng con đường không phải lúc nào cũng thẳng, và những ngã rẽ có thể đưa bạn đến những điều thú vị.",
                "children": [
                  {
                    "id": "stress_future_career_lost_deep1",
                    "userShare": "Tôi sợ mình chọn sai và lãng phí thời gian",
                    "botResponse": "Nỗi sợ chọn sai là có thật, nhưng hãy nhìn nhận rằng không có lựa chọn nào là hoàn toàn sai. Mỗi trải nghiệm đều dạy bạn điều gì đó. Ngay cả khi bạn chọn một ngành rồi sau đó đổi, bạn vẫn có được kỹ năng và bài học. Thời gian không lãng phí nếu bạn học được từ nó. Hãy coi đó là hành trình khám phá, không phải là con đường một chiều."
                  },
                  {
                    "id": "stress_future_career_lost_deep1_alt",
                    "userShare": "Tôi áp lực vì bạn bè đã có định hướng rõ ràng",
                    "botResponse": "Đừng so sánh hành trình của bạn với người khác. Mỗi người có nhịp độ riêng. Có người biết sớm, có người biết muộn, nhưng cuối cùng đều tìm được đường đi. Hãy tập trung vào việc khám phá bản thân, không phải chạy đua với ai. Bạn có thể hỏi bạn bè về lý do họ chọn ngành đó để hiểu thêm, nhưng đừng để áp lực."
                  }
                ]
              },
              {
                "id": "stress_future_career_pressure",
                "userShare": "Tôi cảm thấy áp lực phải 'thành công' để có ý nghĩa",
                "botResponse": "Áp lực phải thành công là một căn bệnh của xã hội hiện đại, khiến nhiều người trẻ kiệt sức. Nhưng thành công không phải là thước đo duy nhất cho ý nghĩa cuộc sống. Bạn có thể tìm thấy ý nghĩa trong những điều giản dị: giúp đỡ người khác, theo đuổi đam mê, xây dựng các mối quan hệ. Hãy tự hỏi: 'Điều gì khiến mình cảm thấy sống động và có ích?' Đó mới là kim chỉ nam thực sự.",
                "children": [
                  {
                    "id": "stress_future_career_pressure_deep1",
                    "userShare": "Nhưng nếu không thành công, mọi người sẽ nhìn mình thế nào?",
                    "botResponse": "Nỗi sợ bị đánh giá là rất lớn, nhưng hãy nhớ rằng cuộc đời bạn là của bạn, không phải của người khác. Những người yêu thương bạn sẽ luôn ủng hộ dù bạn có thế nào. Còn những người chỉ nhìn vào thành tích thì không đáng để bạn bận tâm. Hãy sống cho mình trước, rồi bạn sẽ tìm được những người đồng hành đúng nghĩa."
                  }
                ]
              }
            ]
          },
          {
            "id": "stress_future_pressure",
            "userShare": "Cha mẹ bắt tôi chọn ngành mà tôi không thích",
            "botResponse": "Bị ép chọn ngành mình không yêu thích là tình huống rất khó xử. Bạn có thể sợ làm trái ý cha mẹ, nhưng cũng sợ đánh mất tương lai của mình. Hãy thử tìm hiểu kỹ về ngành đó: có thể bạn sẽ thấy một khía cạnh thú vị nào đó? Nhưng nếu thực sự không phù hợp, bạn cần can đảm đối thoại với cha mẹ. Hãy chuẩn bị những lập luận về sở thích, năng lực của bạn, và đề xuất một hướng đi dung hòa (ví dụ: học thêm song ngành). Đôi khi cha mẹ chỉ muốn điều tốt cho bạn, nhưng họ chưa hiểu bạn đủ.",
            "children": [
              {
                "id": "stress_future_control_autonomy",
                "userShare": "Tôi muốn tự quyết định tương lai của mình, nhưng cha mẹ không cho phép",
                "botResponse": "Khao khát tự quyết là một phần của sự trưởng thành. Bạn có quyền được sống cuộc đời mình. Tuy nhiên, hãy thể hiện sự trưởng thành bằng cách lắng nghe và thương lượng. Bạn có thể viết một bức thư bày tỏ ước mơ, kế hoạch và cam kết sẽ nỗ lực. Mời cha mẹ cùng tìm hiểu về ngành bạn chọn. Nếu họ vẫn phản đối, bạn có thể tìm kiếm sự hỗ trợ từ những người lớn khác. Cuối cùng, hãy nhớ rằng đây là cuộc đời bạn, và bạn sẽ phải sống với lựa chọn của mình.",
                "children": [
                  {
                    "id": "stress_future_control_autonomy_deep1",
                    "userShare": "Tôi sợ nếu đi ngược ý cha mẹ, họ sẽ cắt đứt hỗ trợ",
                    "botResponse": "Đó là một nỗi sợ thực tế. Trong trường hợp đó, hãy cân nhắc một giải pháp trung gian: bạn có thể chọn một ngành mà cha mẹ chấp nhận, nhưng vẫn theo đuổi đam mê qua các khóa học phụ, hoặc dự định học lên cao. Bạn cũng có thể tìm học bổng, làm thêm để tự chủ tài chính một phần. Quan trọng là bạn chứng minh được sự nghiêm túc và trách nhiệm."
                  },
                  {
                    "id": "stress_future_control_autonomy_deep1_alt",
                    "userShare": "Tôi không biết mình thực sự muốn gì, nên càng khó thuyết phục",
                    "botResponse": "Nếu bạn chưa rõ, hãy dành thời gian khám phá bản thân. Tham gia các khóa học trải nghiệm, làm bài trắc nghiệm hướng nghiệp, nói chuyện với nhiều người. Khi bạn có hiểu biết rõ hơn, bạn sẽ tự tin hơn khi trình bày với cha mẹ. Đừng vội, hãy cho phép mình chưa biết."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "stress_health",
        "userShare": "Tôi lo lắng về hình ảnh cơ thể hoặc sức khỏe",
        "botResponse": "Lo lắng về ngoại hình và sức khỏe là điều rất phổ biến, đặc biệt ở tuổi dậy thì khi cơ thể thay đổi. Bạn có thể đang cảm thấy không hài lòng với bản thân hoặc lo sợ về bệnh tật. Hãy chia sẻ cụ thể hơn để mình có thể đồng hành cùng bạn.",
        "children": [
          {
            "id": "stress_health_body_image",
            "userShare": "Tôi muốn thay đổi hình dáng cơ thể tôi",
            "botResponse": "Mong muốn thay đổi hình dáng cơ thể có thể xuất phát từ áp lực xã hội hoặc sự so sánh với người khác. Nhưng mỗi cơ thể đều có vẻ đẹp riêng. Hãy tập trung vào sức khỏe thay vì ngoại hình: ăn uống lành mạnh, vận động vui vẻ. Bạn cũng có thể tìm hiểu về các dáng người khác nhau và học cách yêu thương cơ thể mình. Nếu bạn muốn thay đổi vì sức khỏe, hãy đặt mục tiêu nhỏ và bền vững. Bạn có thể kể mình không hài lòng điều gì nhất?",
            "children": [
              {
                "id": "stress_health_body_shame",
                "userShare": "Tôi cảm thấy xấu hổ vì cơ thể mình, ghét nhìn vào gương",
                "botResponse": "Cảm giác xấu hổ về cơ thể có thể khiến bạn tránh né gương và tự ti. Điều này thường do ảnh hưởng từ mạng xã hội, bạn bè hoặc những lời nhận xét. Hãy nhớ rằng cơ thể bạn là ngôi nhà duy nhất của bạn, nó xứng đáng được yêu thương. Mỗi ngày, hãy tập nhìn vào gương và nói với bản thân một điều tích cực, ví dụ: 'Hôm nay mình có một nụ cười đẹp.' Bạn cũng có thể viết nhật ký về những điều cơ thể giúp bạn làm được. Dần dần, bạn sẽ học cách chấp nhận và trân trọng nó.",
                "children": [
                  {
                    "id": "stress_health_body_shame_deep1",
                    "userShare": "Tôi đã thử nói tích cực nhưng vẫn thấy ghét bản thân",
                    "botResponse": "Thay đổi cách nhìn về bản thân cần thời gian. Hãy kiên nhẫn và đừng ép mình phải yêu ngay lập tức. Thay vào đó, hãy tập trung vào những gì cơ thể bạn làm được: đi, chạy, ôm người thân. Bạn có thể viết ra những hoạt động bạn yêu thích mà cơ thể giúp bạn thực hiện. Dần dần, bạn sẽ chuyển từ 'nhìn' sang 'cảm nhận'."
                  },
                  {
                    "id": "stress_health_body_shame_deep1_alt",
                    "userShare": "Tôi bị bạn bè trêu chọc về ngoại hình",
                    "botResponse": "Bị trêu chọc là một trải nghiệm tổn thương. Hãy nhớ rằng vấn đề nằm ở người trêu, không phải ở bạn. Nếu có thể, hãy nói với họ rằng bạn không thích điều đó. Nếu không, hãy tìm kiếm sự hỗ trợ từ bạn bè thật sự hoặc người lớn. Bạn cũng có thể tham gia các nhóm, câu lạc bộ nơi mọi người tôn trọng nhau hơn."
                  }
                ]
              },
              {
                "id": "stress_health_eating",
                "userShare": "Tôi có vấn đề với ăn uống (ăn liên tục, nhịn ăn, hoặc ẩu ăn)",
                "botResponse": "Các vấn đề về ăn uống thường là dấu hiệu của cảm xúc không được xử lý. Ăn uống có thể trở thành cách đối phó với stress, buồn chán hoặc áp lực. Nếu bạn ăn liên tục, đó có thể là tìm kiếm sự an ủi; nếu nhịn ăn, đó có thể là muốn kiểm soát. Hãy chú ý đến cảm xúc trước khi ăn: bạn đang buồn, lo lắng hay tức giận? Thay vì dùng thức ăn, hãy thử viết ra cảm xúc, gọi cho bạn bè, hoặc làm điều mình thích. Nếu tình trạng kéo dài, bạn nên tìm đến chuyên gia dinh dưỡng hoặc tâm lý. Bạn xứng đáng được khỏe mạnh cả thể chất lẫn tinh thần.",
                "children": [
                  {
                    "id": "stress_health_eating_deep1",
                    "userShare": "Tôi hay ăn vặt khi stress, không kiểm soát được",
                    "botResponse": "Đó là một cơ chế đối phó phổ biến. Thay vì cấm đoán, hãy thử thay thế bằng những lựa chọn lành mạnh hơn như trái cây, sữa chua. Đồng thời, khi cảm thấy muốn ăn, hãy dừng lại 5 phút, hít thở và tự hỏi: 'Mình thực sự đói hay đang buồn?' Nếu là buồn, hãy tìm cách giải tỏa khác. Bạn cũng có thể tập thể dục nhẹ để giải phóng endorphin."
                  },
                  {
                    "id": "stress_health_eating_deep1_alt",
                    "userShare": "Tôi nhịn ăn để giảm cân, nhưng rồi lại ăn bù",
                    "botResponse": "Đó là vòng lặp của chế độ ăn kiêng khắc nghiệt. Nhịn ăn khiến cơ thể thiếu hụt, dẫn đến cảm giác thèm ăn mất kiểm soát. Thay vào đó, hãy ăn đủ bữa, đủ chất, và cho phép mình thỉnh thoảng ăn món yêu thích. Việc giảm cân lành mạnh là quá trình dài, không phải nhịn ăn. Hãy tham khảo ý kiến chuyên gia dinh dưỡng để có kế hoạch phù hợp."
                  }
                ]
              }
            ]
          },
          {
            "id": "stress_health_anxiety",
            "userShare": "Tôi luôn lo lắng về sức khỏe của mình",
            "botResponse": "Lo lắng về sức khỏe là điều nhiều người từng trải qua. Đôi khi nó trở thành một vòng lặp: bạn chú ý đến một cảm giác nhỏ trong cơ thể, lo lắng tăng lên, cơ thể căng thẳng hơn, và cảm giác đó trở nên rõ ràng hơn. Điều này thường được gọi là 'lo âu sức khỏe'. Không phải mọi triệu chứng đều là dấu hiệu của bệnh nghiêm trọng, vì cơ thể luôn có những thay đổi bình thường. Nếu có thể, bạn có thể hạn chế tra cứu triệu chứng trên mạng vì điều đó thường làm nỗi sợ tăng lên. Thay vào đó, hãy tập trung vào thói quen sinh hoạt lành mạnh và theo dõi cơ thể một cách bình tĩnh. Nếu lo lắng ảnh hưởng nhiều đến cuộc sống, bạn có thể cân nhắc tìm sự hỗ trợ từ chuyên gia tâm lý.",
            "children": [
              {
                "id": "stress_health_health_anxiety_spiral",
                "userShare": "Tôi cảm thấy một triệu chứng nhỏ và sợ tôi sẽ không kiểm soát được",
                "botResponse": "Khi ta tập trung quá nhiều vào một cảm giác nhỏ, não có xu hướng phóng đại nó. Điều đó không có nghĩa là bạn tưởng tượng ra, mà là hệ thần kinh đang ở trạng thái cảnh giác cao. Bạn có thể thử kỹ thuật 'grounding': nhìn quanh và kể tên 5 thứ bạn thấy, 4 thứ bạn nghe, 3 cảm giác cơ thể, 2 mùi, và 1 vị. Điều này giúp đưa sự chú ý trở lại hiện tại. Nếu bạn từng đi khám và được trấn an, hãy nhắc lại thông tin đó để cân bằng suy nghĩ. Nếu chưa từng kiểm tra và cảm thấy cần thiết, bạn có thể đi khám một lần để yên tâm. Quan trọng là phân biệt giữa kiểm tra hợp lý và kiểm tra lặp lại chỉ vì lo sợ.",
                "children": [
                  {
                    "id": "stress_health_health_anxiety_spiral_deep1",
                    "userShare": "Tôi đã đi khám nhiều lần, bác sĩ bảo không sao, nhưng tôi vẫn lo",
                    "botResponse": "Khi kết quả khám đều ổn nhưng nỗi lo vẫn còn, có thể vấn đề nằm ở sự lo âu chứ không phải ở cơ thể. Việc tái khám quá thường xuyên đôi khi lại duy trì vòng lặp lo lắng. Bạn có thể thử đặt ra một khoảng thời gian rõ ràng (ví dụ chỉ khám lại khi có triệu chứng mới hoặc theo lịch định kỳ). Song song đó, học cách xử lý suy nghĩ xâm lấn và thư giãn cơ thể sẽ hữu ích hơn. Nếu có thể, bạn có thể trao đổi với chuyên gia tâm lý để được hướng dẫn cụ thể."
                  },
                  {
                    "id": "stress_health_health_anxiety_spiral_deep1_alt",
                    "userShare": "Tôi sợ mình mắc bệnh nghiêm trọng dù không có dấu hiệu rõ ràng",
                    "botResponse": "Nỗi sợ mắc bệnh nghiêm trọng là điều nhiều người từng trải qua, đặc biệt khi nghe tin tức hoặc đọc thông tin trên mạng. Tuy nhiên, suy nghĩ 'điều tồi tệ nhất sẽ xảy ra' là một kiểu suy nghĩ lo âu thường gặp. Bạn có thể thử tự hỏi: 'Mình có bằng chứng rõ ràng cho điều này không?' và 'Có khả năng nào ít nghiêm trọng hơn không?'. Tập trung vào những điều bạn có thể kiểm soát như nghỉ ngơi, ăn uống điều độ và vận động nhẹ sẽ giúp cơ thể và tâm trí ổn định hơn."
                  }
                ]
              },
              {
                "id": "stress_health_anxiety_information_trigger",
                "userShare": "Tôi đọc tin tức hoặc xem mạng là lại sợ mình bị bệnh",
                "botResponse": "Tin tức và mạng xã hội thường nhấn mạnh những trường hợp hiếm hoặc nghiêm trọng vì chúng gây chú ý. Điều đó có thể khiến bạn cảm thấy rủi ro lớn hơn thực tế. Bạn có thể thử giới hạn thời gian đọc tin về sức khỏe và chọn nguồn đáng tin cậy. Đôi khi việc tạm ngưng tiếp xúc với nội dung gây lo lắng một thời gian cũng là một cách bảo vệ tâm lý."
              },
              {
                "id": "stress_health_anxiety_body_focus",
                "userShare": "Tôi liên tục kiểm tra cơ thể mình xem có gì bất thường không",
                "botResponse": "Việc kiểm tra cơ thể liên tục có thể khiến não bạn nghĩ rằng đang có nguy hiểm, từ đó làm lo lắng tăng lên. Bạn có thể thử giảm dần tần suất kiểm tra thay vì dừng ngay lập tức. Ví dụ, đặt một khung giờ cụ thể trong ngày để tự quan sát, thay vì kiểm tra nhiều lần. Dần dần, cơ thể và tâm trí sẽ học được rằng không phải lúc nào cũng cần cảnh giác."
              }
            ]
          }
        ]
      },
      {
        "id": "stress_coping",
        "userShare": "Làm cách nào để giảm căng thẳng?",
        "botResponse": "Có nhiều cách để giảm căng thẳng, nhưng điều quan trọng là tìm ra phương pháp phù hợp với bạn. Mình sẽ giới thiệu một số kỹ thuật từ đơn giản đến chuyên sâu. Bạn muốn bắt đầu với việc bình tĩnh tức thì hay xây dựng thói quen lâu dài?",
        "children": [
          {
            "id": "stress_coping_breathing",
            "userShare": "Làm cách nào để bình tĩnh ngay lập tức?",
            "botResponse": "Khi bạn cảm thấy hoảng loạn, kỹ thuật thở 4-7-8 rất hiệu quả: hít vào bằng mũi trong 4 giây, giữ hơi trong 7 giây, thở ra chậm bằng miệng trong 8 giây. Lặp lại 3-4 lần. Kỹ thuật này kích hoạt hệ thần kinh đối giao cảm, giúp bạn thư giãn. Bạn cũng có thể thử thở bụng: đặt tay lên bụng, hít sâu để bụng phồng lên, thở ra để bụng xẹp. Hãy thực hành ngay khi bạn cảm thấy lo lắng. Bạn đã thử chưa?",
            "children": [
              {
                "id": "stress_coping_panic",
                "userShare": "Tôi bị cơn hoảng loạn, tôi sợ tôi không bình tĩnh được",
                "botResponse": "Cơn hoảng loạn thực sự đáng sợ, nhưng hãy nhớ rằng nó không thể giết bạn. Đó chỉ là phản ứng adrenaline quá mức. Khi cơn đến, hãy cố gắng tập trung vào hơi thở, hoặc sử dụng kỹ thuật 5-4-3-2-1 mà mình đã đề cập. Bạn cũng có thể ôm một vật gì đó mềm, nghe nhạc nhẹ. Sau cơn, hãy chăm sóc bản thân bằng cách uống nước ấm, nghỉ ngơi. Nếu cơn thường xuyên, bạn nên tìm đến chuyên gia tâm lý để được hỗ trợ lâu dài. Bạn có người thân nào bên cạnh lúc đó không?",
                "children": [
                  {
                    "id": "stress_coping_panic_deep1",
                    "userShare": "Tôi thường ở một mình khi lên cơn, rất sợ",
                    "botResponse": "Ở một mình khi lên cơn hoảng loạn có thể làm tăng cảm giác sợ hãi. Hãy chuẩn bị sẵn một danh sách các kỹ thuật bạn có thể áp dụng, và dán ở nơi dễ thấy. Bạn cũng có thể nhắn tin cho một người tin cậy để họ động viên qua điện thoại. Nếu có thể, hãy tìm một ứng dụng thiền hoặc hướng dẫn thở trên điện thoại để dùng khi cần."
                  },
                  {
                    "id": "stress_coping_panic_deep1_alt",
                    "userShare": "Tôi sợ mình sẽ ngất xỉu",
                    "botResponse": "Như đã nói, rất khó ngất vì hoảng loạn. Huyết áp thường tăng, không giảm. Tuy nhiên, nếu bạn cảm thấy chóng mặt, hãy ngồi xuống, cúi đầu xuống thấp. Uống nước mát cũng giúp ích. Hãy nhắc mình: 'Đây chỉ là tạm thời, nó sẽ qua.'"
                  }
                ]
              }
            ]
          },
          {
            "id": "stress_coping_sleep",
            "userShare": "Tôi không thể ngủ vì căng thẳng",
            "botResponse": "Mất ngủ vì căng thẳng là một vòng lặp khó chịu: bạn lo lắng nên không ngủ được, không ngủ được càng lo lắng hơn. Để cải thiện, hãy tạo thói quen thư giãn trước khi ngủ: tắt điện thoại 1 giờ, đọc sách nhẹ, nghe nhạc không lời, tắm nước ấm. Nếu nằm mà không ngủ được, đừng cố ép; hãy ra khỏi giường, làm việc gì đó thư giãn rồi quay lại. Bạn cũng có thể viết nhật ký lo lắng ra giấy trước khi ngủ để 'trút bỏ' suy nghĩ. Bạn đã thử cách nào chưa?",
            "children": [
              {
                "id": "stress_coping_sleep_intrusive",
                "userShare": "Tôi không thể dừng suy nghĩ",
                "botResponse": "Suy nghĩ xâm lấn (rumination) thường xuất hiện khi bạn nằm yên. Đó là lúc tâm trí cố gắng giải quyết vấn đề nhưng lại bị mắc kẹt. Hãy thử kỹ thuật 'dừng suy nghĩ': khi một ý nghĩ lo lắng xuất hiện, bạn tự nhủ 'DỪNG LẠI' và chuyển sang một hình ảnh dễ chịu (như bãi biển). Hoặc bạn có thể tập thiền chánh niệm: quan sát suy nghĩ như mây trôi, không đánh giá. Dần dần, bạn sẽ học cách không bị cuốn vào vòng xoáy lo âu.",
                "children": [
                  {
                    "id": "stress_coping_sleep_intrusive_deep1",
                    "userShare": "Tôi thử dừng nhưng không được, suy nghĩ cứ quay lại",
                    "botResponse": "Điều này bình thường, vì não bạn đã quen với việc lo lắng. Hãy kiên trì, mỗi lần bạn nhận ra mình đang lo và nhẹ nhàng đưa tâm trí về hơi thở, đó là một lần tập luyện. Bạn cũng có thể thử viết ra những suy nghĩ đó vào một cuốn sổ để 'trút' chúng ra ngoài. Sau đó, hãy hứa với mình sẽ xử lý vào ngày mai. Điều này giúp não tạm thời buông bỏ."
                  }
                ]
              },
              {
                "id": "stress_coping_sleep_deep1_alt",
                "userShare": "Tôi thức dậy giữa đêm và không thể ngủ lại",
                "botResponse": "Thức giấc giữa đêm cũng là dấu hiệu của căng thẳng. Khi đó, đừng nằm trằn trọc. Hãy ra khỏi giường, làm việc gì đó nhẹ nhàng như đọc sách, uống trà ấm, cho đến khi buồn ngủ trở lại. Tránh nhìn điện thoại vì ánh sáng xanh kích thích não. Bạn cũng có thể tập vài động tác yoga nhẹ nhàng."
              }
            ]
          },
          {
            "id": "stress_coping_exercise",
            "userShare": "Tập thể dục có giúp giảm stress không?",
            "botResponse": "Tập thể dục là một trong những cách giảm stress hiệu quả nhất, vì nó giải phóng endorphin - hormone hạnh phúc. Bạn không cần tập nặng, chỉ cần đi bộ 20 phút, chạy bộ nhẹ, nhảy theo nhạc, hoặc tập yoga. Quan trọng là bạn thấy vui khi vận động. Hãy thử tìm một môn thể thao bạn thích và biến nó thành thói quen hàng ngày. Bạn thích hoạt động gì?",
            "children": [
              {
                "id": "stress_coping_exercise_deeper",
                "userShare": "Tôi không có thời gian hoặc lười vận động",
                "botResponse": "Nếu bạn cảm thấy lười, hãy bắt đầu bằng những bài tập rất nhỏ, chỉ 5 phút mỗi ngày. Ví dụ, vài động tác giãn cơ ngay tại bàn học. Bạn cũng có thể kết hợp vận động với sở thích: nghe nhạc trong lúc đi bộ, tập theo video ngắn trên YouTube. Hãy nhớ rằng mỗi chút vận động đều có lợi. Bạn có thể rủ bạn bè cùng tập để tạo động lực. Thử đặt mục tiêu nhỏ trong tuần này nhé!",
                "children": [
                  {
                    "id": "stress_coping_exercise_deep2",
                    "userShare": "Tôi đã thử nhưng bỏ cuộc sau vài ngày",
                    "botResponse": "Điều này rất phổ biến. Thay vì đặt mục tiêu quá cao, hãy tập trung vào việc duy trì thói quen nhỏ. Ví dụ, chỉ cần đi bộ 5 phút mỗi ngày, và khi đã quen, tăng dần lên. Hãy tự thưởng cho mình khi hoàn thành. Quan trọng là bạn không bỏ cuộc vì một ngày lỡ tập, hãy tiếp tục vào ngày hôm sau. Bạn có thể ghi lại nhật ký vận động để thấy tiến bộ."
                  },
                  {
                    "id": "stress_coping_exercise_deep2_alt",
                    "userShare": "Tôi không thích thể thao, có cách nào khác không?",
                    "botResponse": "Tất nhiên! Vận động không nhất thiết là thể thao. Bạn có thể nhảy theo nhạc, chơi với thú cưng, làm vườn, dọn dẹp nhà cửa. Bất kỳ hoạt động nào khiến cơ thể cử động đều có ích. Hãy tìm một hoạt động bạn thực sự thích, và biến nó thành niềm vui, không phải nghĩa vụ."
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "sleep": {
    "topic": "Mất Ngủ",
    "greeting": "Bạn đang gặp khó khăn với giấc ngủ? Mất ngủ có thể khiến bạn mệt mỏi và ảnh hưởng nhiều đến học tập. Hãy cùng mình tìm hiểu nguyên nhân và cách cải thiện nhé! 🌙",
    "conversations": [
      {
        "id": "sleep_falling_asleep",
        "userShare": "Tôi khó đi vào giấc ngủ, nằm mãi không ngủ được",
        "botResponse": "Nằm trằn trọc hàng giờ mà không ngủ được thực sự rất khó chịu. Có nhiều nguyên nhân khiến bạn khó vào giấc. Bạn có thể chia sẻ thêm: bạn thường nghĩ gì khi nằm? Có lo lắng điều gì không, hay do thói quen sinh hoạt?",
        "children": [
          {
            "id": "sleep_falling_asleep_anxiety_past",
            "userShare": "Tôi thường nghĩ về những việc nhỏ nhặt dù đã trôi qua rất lâu",
            "botResponse": "Việc nhớ lại những chuyện cũ, đặc biệt là những điều khiến bạn xấu hổ hoặc hối tiếc, là điều khá phổ biến khi nằm trong yên tĩnh. Ban đêm, não có xu hướng 'phát lại' những ký ức chưa được xử lý xong. Điều đó không có nghĩa là bạn yếu đuối, mà là bạn đang rất nhạy cảm với trải nghiệm của mình. Bạn có thể thử tự nói: 'Chuyện này đã qua rồi, mình đã học được điều gì từ nó?' Sau đó tưởng tượng đặt ký ức đó vào một chiếc hộp và hẹn mở lại vào ngày mai nếu cần. Việc tạo một 'ranh giới thời gian' giúp não tạm dừng vòng lặp suy nghĩ.",
            "children": [
              {
                "id": "sleep_falling_asleep_anxiety_past_shame",
                "userShare": "Tôi cứ nhớ lại những lần mình nói sai và thấy ngại ngùng",
                "botResponse": "Cảm giác xấu hổ thường làm ký ức trở nên mạnh hơn. Nhưng hãy nhớ rằng hầu hết mọi người bận suy nghĩ về chính họ nhiều hơn là nhớ lỗi nhỏ của bạn. Bạn có thể thử đổi góc nhìn: nếu một người bạn mắc lỗi như vậy, bạn có trách họ mãi không? Thường thì không. Hãy thử đối xử với mình bằng sự bao dung tương tự."
              },
              {
                "id": "sleep_falling_asleep_anxiety_self_reflect",
                "userShare": "Tôi cứ tự hỏi sao lúc đó mình lại làm vậy, đáng lẽ mình đã có thể làm tốt hơn.",
                "botResponse": "Khi bạn liên tục tự hỏi 'Sao mình lại làm vậy?', điều đó cho thấy bạn quan tâm đến cách mình cư xử. Tuy nhiên, não có xu hướng phóng đại lỗi nhỏ vào ban đêm. Ban ngày bạn có thể thấy nó bình thường, nhưng ban đêm nó trở nên nghiêm trọng hơn. Bạn có thể thử đổi câu hỏi từ 'Sao mình ngu vậy?' sang 'Lúc đó mình đang cảm thấy gì nên mới phản ứng như vậy?'. Cách này giúp bạn hiểu mình thay vì chỉ trích mình.",
                "children": [
                  {
                    "id": "sleep_falling_asleep_anxiety_self_reflect_embarrassed",
                    "userShare": "Tôi thấy xấu hổ vì hành động của mình",
                    "botResponse": "Xấu hổ là cảm xúc giúp chúng ta học hỏi, nhưng nếu giữ nó quá lâu, nó sẽ trở thành tự trách. Hãy thử tưởng tượng một người bạn thân làm điều đó, bạn có đánh giá họ nặng nề như cách bạn đang đánh giá mình không? Thường thì chúng ta khắt khe với bản thân hơn rất nhiều.",
                    "children":[
                      {
                        "id": "sleep_falling_asleep_anxiety_self_reflect_embarrassed_think_forever",
                        "userShare": "Tôi sợ họ sẽ nhớ mãi lỗi đó của tôi",
                        "botResponse": "Não của bạn đang phóng đại khả năng người khác nhớ chuyện đó. Thực tế, hầu hết mọi người chỉ nhớ những điều liên quan đến họ. Bạn có nhớ chi tiết những lỗi nhỏ của người khác lâu như vậy không? Rất hiếm. Cảm giác này là do bạn quan tâm đến hình ảnh của mình, không phải vì bạn thực sự tệ."
                      },
                      {
                        "id": "sleep_falling_asleep_anxiety_self_reflect_embarrassed_identity",
                        "userShare": "Tôi cảm giác mình là người kỳ cục",
                        "botResponse": "Một hành động không định nghĩa cả con người bạn. Khi bạn gán nhãn 'kỳ cục' cho mình, bạn đang biến một sự kiện thành bản sắc. Thay vì 'Tôi là người kỳ cục', bạn có thể nói 'Tôi đã có một khoảnh khắc xử lý chưa tốt'. Điều này mềm mại và chính xác hơn."
                      }
                    ]
                  },
                  {
                    "id": "sleep_falling_asleep_anxiety_self_reflect_overanalyze",
                    "userShare": "Tôi cứ phân tích đi phân tích lại tình huống đó",
                    "botResponse": "Phân tích có thể giúp rút kinh nghiệm, nhưng khi bạn lặp lại cùng một suy nghĩ mà không có thông tin mới, đó chỉ là vòng lặp. Bạn có thể tự hỏi: 'Mình đã rút ra bài học chưa?' Nếu câu trả lời là rồi, bạn có thể cho phép mình dừng lại ở đó.",
                    "children":[
                      {
                        "id": "sleep_falling_asleep_anxiety_self_reflect_overanalyze_control",
                        "userShare": "Tôi muốn hiểu mọi thứ để không lặp lại sai lầm",
                        "botResponse": "Mong muốn kiểm soát để tránh sai lầm là điều dễ hiểu. Nhưng cuộc sống không bao giờ hoàn toàn có thể dự đoán. Bạn chỉ cần rút ra một bài học cốt lõi, không cần phân tích đến mức hoàn hảo. Học một điều là đủ, không cần mổ xẻ mọi chi tiết."
                      },
                      {
                        "id": "sleep_falling_asleep_anxiety_self_reflect_overanalyze_loop",
                        "userShare": "Tôi biết mình đang suy nghĩ quá nhiều nhưng không dừng lại được",
                        "botResponse": "Khi bạn cố ép mình ngừng nghĩ, não thường nghĩ nhiều hơn. Thay vì chống lại, bạn có thể đặt hẹn giờ 5 phút cho phép mình suy nghĩ, rồi khi hết giờ, chuyển sang tập trung vào hơi thở. Việc tạo giới hạn giúp não có cảm giác an toàn hơn."
                      }
                    ]
                  },
                  {
                    "id": "sleep_falling_asleep_anxiety_self_reflect_fear_judgment",
                    "userShare": "Tôi sợ người khác nghĩ xấu về mình",
                    "botResponse": "Chúng ta thường tưởng tượng người khác suy nghĩ nhiều về mình hơn thực tế. Nhưng đa số mọi người bận suy nghĩ về chính họ. Nếu có hiểu lầm, bạn luôn có cơ hội sửa lại vào ngày mai. Còn hiện tại, bạn có thể nhắc mình rằng một hành động không định nghĩa toàn bộ con người bạn."
                  }
                ]
              },
            ]
          },

          {
            "id": "sleep_falling_asleep_anxiety_others_feelings",
            "userShare": "Tôi thường để ý và lo về cảm xúc của người khác",
            "botResponse": "Việc nhạy cảm với cảm xúc người khác cho thấy bạn có sự đồng cảm cao. Tuy nhiên, khi bạn cố gắng chịu trách nhiệm cho cảm xúc của mọi người, điều đó có thể làm bạn rất mệt. Mỗi người đều có cảm xúc riêng và không phải tất cả đều do bạn gây ra. Trước khi ngủ, bạn có thể tự hỏi: 'Điều này có thực sự nằm trong khả năng kiểm soát của mình không?' Nếu không, hãy cho phép mình tạm buông xuống đến ngày mai.",
            "children": [
              {
                "id": "sleep_falling_asleep_anxiety_others_overthink",
                "userShare": "Tôi sợ mình đã làm ai đó buồn dù họ không nói gì",
                "botResponse": "Khi người khác im lặng, não chúng ta dễ tự điền vào khoảng trống bằng kịch bản tiêu cực. Nhưng suy đoán không phải là sự thật. Nếu thật sự cần thiết, bạn có thể kiểm tra nhẹ nhàng vào ngày hôm sau. Còn hiện tại, bạn có thể nhắc mình rằng mình không có đủ bằng chứng để kết luận điều tệ nhất.",
                "children":[
                  {
                    "id": "sleep_falling_asleep_anxiety_others_overthink_guilt",
                    "userShare": "Tôi luôn cảm thấy có lỗi dù không chắc mình làm gì sai",
                    "botResponse": "Cảm giác tội lỗi mơ hồ thường xuất hiện ở những người có sự đồng cảm cao. Nhưng đồng cảm không có nghĩa là bạn phải gánh trách nhiệm cho mọi cảm xúc xung quanh. Bạn có thể tự hỏi: 'Mình có bằng chứng rõ ràng không, hay chỉ là suy đoán?'"
                  }
                ]

              },
              {
                "id": "sleep_falling_asleep_anxiety_others_peoplepleasing",
                "userShare": "Tôi luôn muốn làm hài lòng mọi người nên rất áp lực",
                "botResponse": "Muốn được người khác yêu quý là nhu cầu tự nhiên. Nhưng nếu bạn luôn đặt người khác lên trước mình, bạn có thể kiệt sức. Trước khi ngủ, bạn có thể thử nghĩ đến một điều hôm nay bạn đã làm cho chính mình, dù rất nhỏ. Chăm sóc bản thân không có nghĩa là ích kỷ — đó là cách giữ năng lượng để tiếp tục quan tâm đến người khác một cách lành mạnh."
              }
            ]
          },
          {
            "id": "sleep_falling_asleep_bad_habits",
            "userShare": "Tôi hay dùng điện thoại trước khi ngủ",
            "botResponse": "Ánh sáng xanh từ điện thoại ức chế melatonin, hormone giúp ngủ, khiến bạn khó vào giấc. Bạn có thể thử tắt điện thoại ít nhất 30-60 phút trước khi ngủ, thay vào đó đọc sách hoặc nghe nhạc nhẹ. Bạn có sẵn sàng thử không?",
            "children": [
              {
                "id": "sleep_falling_asleep_bad_habits_phone",
                "userShare": "Tôi không thể bỏ điện thoại, lỡ tin nhắn quan trọng",
                "botResponse": "Nếu lo lắng về tin nhắn, bạn có thể bật chế độ im lặng nhưng để điện thoại xa giường. Hoặc hẹn giờ tắt sau 30 phút. Có nhiều ứng dụng có thể lọc ánh sáng xanh, nhưng tốt nhất vẫn là tránh xa màn hình. Bạn có thể thử một tuần và xem giấc ngủ cải thiện thế nào."
              },
              {
                "id": "sleep_falling_asleep_bad_habits_caffeine",
                "userShare": "Tôi hay uống trà đặc hoặc cà phê tối",
                "botResponse": "Caffeine có thể ở lại trong cơ thể hàng giờ và làm bạn khó ngủ. Hãy thử không uống các đồ uống chứa caffeine sau 3-4 giờ chiều. Thay vào đó, uống trà thảo mộc như hoa cúc, trà atiso. Bạn có muốn tìm hiểu thêm về các loại trà dễ ngủ không?"
              }
            ]
          },
          {
            "id": "sleep_falling_asleep_environment",
            "userShare": "Phòng ngủ của tôi ồn quá, không yên tĩnh",
            "botResponse": "Môi trường xung quanh ảnh hưởng lớn đến giấc ngủ. Nếu có tiếng ồn, bạn có thể thử dùng nút tai, máy tạo tiếng ồn trắng hoặc bật nhạc nhẹ. Bạn cũng có thể trao đổi với gia đình để tìm cách giảm tiếng ồn. Bạn đã thử cách nào chưa?",
            "children": [
              {
                "id": "sleep_falling_asleep_environment_noise",
                "userShare": "Nhà tôi gần đường, xe cộ ồn ào",
                "botResponse": "Tiếng ồn từ bên ngoài khó kiểm soát. Bạn có thể thử rèm cửa dày, hoặc dùng tai nghe chống ồn khi ngủ. Nếu quen với tiếng ồn trắng, bạn có thể bật quạt hoặc ứng dụng tiếng mưa rơi. Điều quan trọng là tạo một không gian thoải mái nhất có thể."
              }
            ]
          },
          {
            "id": "sleep_falling_asleep_future_worry",
            "userShare": "Tôi lo về những chuyện chưa xảy ra trong tương lai",
            "botResponse": "Lo về tương lai là phản ứng tự nhiên khi bạn muốn mọi thứ ổn thỏa. Nhưng ban đêm không phải thời điểm tốt để giải quyết vấn đề dài hạn. Bạn có thể viết ra điều bạn lo và tự nhủ: 'Ngày mai mình sẽ xử lý'. Viết ra giúp não cảm thấy đã ghi nhớ nên bớt lặp lại.",
            "children": [
              {
                "id": "sleep_falling_asleep_future_worry_exam",
                "userShare": "Tôi sợ thi không đạt",
                "botResponse": "Nỗi sợ này cho thấy bạn coi trọng kết quả. Nhưng lo lắng ban đêm không làm điểm cao hơn. Điều thực sự giúp bạn là nghỉ ngơi đủ để ngày mai học hiệu quả hơn."
              },
              {
                "id": "sleep_falling_asleep_future_worry_life",
                "userShare": "Tôi sợ sau này mình không thành công",
                "botResponse": "Không ai ở tuổi bạn có thể nhìn rõ toàn bộ tương lai. Cảm giác mơ hồ này là bình thường. Thành công là quá trình dài, không phải một bài kiểm tra hay một quyết định duy nhất."
              }
            ]
          }
        ]
      },
      {
        "id": "sleep_midnight_waking",
        "userShare": "Tôi thường thức dậy giữa đêm và không thể ngủ lại",
        "botResponse": "Thức giấc giữa đêm rồi không ngủ lại được là một dạng mất ngủ phổ biến. Khi đó, bạn thường làm gì? Nằm trằn trọc hay dậy làm việc khác?",
        "children": [
          {
            "id": "sleep_midnight_waking_anxiety",
            "userShare": "Tôi nằm lo lắng đủ thứ, không thể ngủ",
            "botResponse": "Giữa đêm, khi mọi thứ yên tĩnh, những lo lắng dễ xuất hiện hơn. Bạn có thể thử kỹ thuật 'dừng suy nghĩ' hoặc tập trung vào hơi thở. Nếu sau 20 phút vẫn không ngủ lại, hãy ra khỏi giường, làm việc gì đó thư giãn như đọc sách, uống nước ấm, rồi quay lại khi cảm thấy buồn ngủ. Tránh xem điện thoại vì ánh sáng sẽ kích thích não.",
            "children": [
              {
                "id": "sleep_midnight_waking_anxiety_techniques",
                "userShare": "Tôi thử ra khỏi giường nhưng vẫn không buồn ngủ",
                "botResponse": "Đừng nản. Có thể bạn cần thời gian để 'làm trống' tâm trí. Hãy thử đọc một cuốn sách nhàm chán, hoặc nghe một bài podcast nhẹ nhàng. Tránh các hoạt động kích thích. Dần dần, não sẽ hiểu rằng giường chỉ dành cho ngủ."
              }
            ]
          },
          {
            "id": "sleep_midnight_waking_physiological",
            "userShare": "Tôi thường thức dậy vì đi vệ sinh",
            "botResponse": "Nếu bạn thức dậy để đi vệ sinh nhiều lần, hãy thử hạn chế uống nước sau 8 giờ tối. Cũng nên kiểm tra xem có uống cà phê, trà vào buổi tối không. Nếu vẫn tiếp diễn, có thể liên quan đến sức khỏe, bạn nên trao đổi với bác sĩ."
          }
        ]
      },
      {
        "id": "sleep_nightmares",
        "userShare": "Tôi hay gặp ác mộng, giật mình tỉnh giấc",
        "botResponse": "Ác mộng có thể khiến bạn sợ hãi và khó ngủ lại. Thường thì ác mộng liên quan đến căng thẳng, lo âu trong ngày. Bạn có nhớ mình hay mơ thấy gì không?",
        "children": [
          {
            "id": "sleep_nightmares_content",
            "userShare": "Tôi mơ thấy bị đuổi, bị rơi, hoặc những điều đáng sợ",
            "botResponse": "Những giấc mơ kiểu này thường phản ánh cảm giác bất an, mất kiểm soát trong cuộc sống. Bạn có thể thử viết nhật ký giấc mơ, và sau đó tưởng tượng một kết thúc khác tích cực hơn. Trước khi ngủ, hãy dành thời gian thư giãn, tránh xem phim kinh dị hoặc nội dung căng thẳng. Nếu ác mộng kéo dài, có thể tìm đến chuyên gia tâm lý.",
            "children": [
              {
                "id": "sleep_nightmares_coping",
                "userShare": "Tôi sợ ngủ vì sợ gặp ác mộng",
                "botResponse": "Nỗi sợ này càng làm bạn khó ngủ. Hãy tạo một nghi thức thư giãn trước khi ngủ: nghe nhạc nhẹ, tưởng tượng một nơi an toàn. Bạn cũng có thể để một ánh đèn ngủ mờ để cảm thấy an tâm hơn. Nếu tỉnh dậy sau ác mộng, hãy trấn an bản thân rằng đó chỉ là giấc mơ, và làm vài động tác thở sâu.",
                "children": [
                  {
                    "id": "sleep_nightmares_coping_control",
                    "userShare": "Tôi cảm thấy mình không kiểm soát được giấc mơ",
                    "botResponse": "Giấc mơ xảy ra ngoài ý thức nên bạn không thể điều khiển trực tiếp. Nhưng bạn có thể ảnh hưởng gián tiếp bằng cách giảm căng thẳng trước khi ngủ. Viết ra điều khiến bạn lo lắng trong ngày và 'đóng sổ' nó lại có thể giúp não bớt hoạt động mạnh khi ngủ."
                  },
                  {
                    "id": "sleep_nightmares_coping_repeat",
                    "userShare": "Tôi cứ mơ đi mơ lại một kiểu giống nhau",
                    "botResponse": "Những giấc mơ lặp lại thường liên quan đến một cảm xúc chưa được giải quyết. Thay vì chỉ cố quên nó, bạn có thể tự hỏi: 'Gần đây mình có đang cảm thấy bị áp lực hay mất kiểm soát ở đâu không?'. Khi giải quyết cảm xúc ban ngày, giấc mơ thường giảm dần."
                  },
                  {
                    "id": "sleep_nightmares_coping_afterwake",
                    "userShare": "Sau khi tỉnh dậy tôi vẫn còn sợ rất lâu",
                    "botResponse": "Sau ác mộng, cơ thể vẫn còn ở trạng thái cảnh giác cao. Bạn có thể thử ngồi dậy, uống một ít nước ấm, hít thở chậm và quan sát xung quanh để nhắc não rằng bạn đang an toàn. Việc nhìn vào những đồ vật quen thuộc giúp cơ thể 'quay về thực tại'."
                  }
                ]
              }
            ]
          },
          {
            "id": "sleep_nightmares_content_stress_school",
            "userShare": "Tôi hay mơ về việc thi cử hoặc bị điểm kém",
            "botResponse": "Giấc mơ về thi cử rất phổ biến khi bạn đang chịu áp lực thành tích. Nó phản ánh nỗi sợ không đạt kỳ vọng hơn là thực tế chắc chắn sẽ xảy ra. Hãy xem lại: gần đây bạn có đang tự gây áp lực quá mức không?",
            "children": [
              {
                "id": "sleep_nightmares_school_expectations",
                "userShare": "Tôi sợ không đạt kỳ vọng của cha mẹ",
                "botResponse": "Khi bạn sợ làm cha mẹ thất vọng, giấc mơ có thể phản ánh nỗi sợ đó. Nhưng hãy nhớ: giá trị của bạn không chỉ nằm ở điểm số. Bạn có thể thử nói chuyện với cha mẹ về áp lực mình đang cảm thấy không?"
              },
              {
                "id": "sleep_nightmares_school_perfectionism",
                "userShare": "Tôi chỉ chấp nhận điểm cao, dưới đó là thấy thất bại",
                "botResponse": "Tiêu chuẩn cao có thể giúp bạn tiến bộ, nhưng nếu quá khắt khe, nó biến thành áp lực. Não bạn có thể đang 'tập dượt' nỗi sợ thất bại trong giấc mơ. Hãy thử cho mình quyền được sai sót và xem đó là cơ hội học hỏi."
              },
              {
                "id": "sleep_nightmares_school_unprepared",
                "userShare": "Tôi mơ mình vào phòng thi mà chưa học gì",
                "botResponse": "Giấc mơ này thường xuất hiện khi bạn cảm thấy chưa sẵn sàng trong một khía cạnh nào đó của cuộc sống. Nó không chỉ liên quan đến học tập mà còn là cảm giác thiếu tự tin. Bạn có đang cảm thấy 'chưa đủ tốt' ở đâu không?"
              }
            ]
          },
          {
            "id": "sleep_nightmares_content_family",
            "userShare": "Tôi mơ thấy mình làm ai đó thất vọng",
            "botResponse": "Giấc mơ này thường liên quan đến nỗi sợ bị đánh giá hoặc làm người khác buồn. Điều đó cho thấy bạn quan tâm đến mối quan hệ. Nhưng hãy nhớ: bạn không thể làm hài lòng tất cả mọi người mọi lúc.",
            "children": [
              {
                "id": "sleep_nightmares_family_conflict",
                "userShare": "Gần đây tôi có mâu thuẫn với gia đình",
                "botResponse": "Mâu thuẫn chưa được giải quyết có thể xuất hiện trong giấc mơ như một cách não xử lý cảm xúc. Nếu có thể, hãy thử trò chuyện khi mọi người bình tĩnh hơn. Đôi khi chỉ cần nói ra cảm xúc cũng giúp nhẹ lòng."
              },
              {
                "id": "sleep_nightmares_peoplepleasing",
                "userShare": "Tôi luôn cố gắng làm vừa lòng mọi người",
                "botResponse": "Khi bạn luôn đặt người khác lên trước, bạn dễ cảm thấy lo lắng về việc họ đánh giá mình. Giấc mơ có thể là dấu hiệu bạn đang cần nghỉ ngơi và đặt ranh giới lành mạnh."
              },
              {
                "id": "sleep_nightmares_self_worth",
                "userShare": "Tôi cảm thấy mình không đủ tốt",
                "botResponse": "Cảm giác 'không đủ tốt' thường bắt nguồn từ so sánh hoặc kỳ vọng quá cao. Nhưng giá trị của bạn không được đo bằng việc người khác có hài lòng hay không."
              }
            ]
          },
          {
            "id": "sleep_nightmares_sensitive",
            "userShare": "Tôi rất nhạy cảm nên xem gì cũng dễ mơ lại",
            "botResponse": "Người nhạy cảm thường có trí tưởng tượng sống động hơn, nên nội dung ban ngày dễ xuất hiện trong giấc mơ. Bạn có thể thử 'chế độ bảo vệ tâm trí' trước khi ngủ: tránh nội dung tiêu cực 1–2 giờ trước khi đi ngủ.",
            "children": [
              {
                "id": "sleep_nightmares_sensitive_media",
                "userShare": "Tôi hay xem phim hoặc lướt mạng trước khi ngủ",
                "botResponse": "Khi bạn xem nội dung sống động trước khi ngủ, não không kịp phân loại đâu là 'trải nghiệm thật' và đâu là 'giải trí'. Với người nhạy cảm, hình ảnh có thể được lưu lại rất rõ ràng và xuất hiện trong giấc mơ. Bạn có thể thử đặt một quy tắc mềm cho mình: sau 9 giờ tối chỉ xem nội dung nhẹ nhàng hoặc tích cực. Nếu khó bỏ điện thoại ngay, hãy giảm độ sáng và chuyển sang nội dung thư giãn hơn như đọc truyện ngắn, nghe podcast nhẹ.",
                "children": [
                  {
                    "id": "sleep_nightmares_sensitive_media_horror",
                    "userShare": "Tôi hay xem phim căng thẳng hoặc kinh dị",
                    "botResponse": "Nội dung căng thẳng kích hoạt hệ thần kinh giao cảm – hệ giúp bạn cảnh giác. Khi ngủ ngay sau đó, cơ thể chưa kịp 'hạ nhiệt', nên giấc mơ dễ mang màu sắc tiêu cực. Bạn có thể thử thay thế bằng nội dung trung tính hoặc tích cực ít nhất 60–90 phút trước khi ngủ."
                  },
                  {
                    "id": "sleep_nightmares_sensitive_media_scrolling",
                    "userShare": "Tôi chỉ lướt mạng chứ không xem gì nặng nề",
                    "botResponse": "Ngay cả việc lướt mạng liên tục cũng khiến não bị kích thích vì lượng thông tin dồn dập. Với người nhạy cảm, quá nhiều thông tin trước khi ngủ có thể khiến não tiếp tục xử lý trong giấc mơ. Hãy thử giới hạn thời gian và kết thúc bằng một hoạt động chậm lại như hít thở sâu."
                  }
                ]
              },
              {
                "id": "sleep_nightmares_sensitive_empathy",
                "userShare": "Tôi dễ bị ảnh hưởng bởi cảm xúc của người khác",
                "botResponse": "Người có mức độ đồng cảm cao thường vô thức 'mang theo' cảm xúc của người khác suốt cả ngày. Khi đi ngủ, não bạn có thể tiếp tục xử lý những cảm xúc đó dù chúng không hoàn toàn thuộc về bạn. Trước khi ngủ, bạn có thể thử một bài tập nhỏ: nhắm mắt và tưởng tượng bạn đặt những cảm xúc không phải của mình xuống một chiếc hộp, rồi để nó ngoài phòng. Đây không phải là phủ nhận, mà là tạo ranh giới lành mạnh.",
                "children": [
                  {
                    "id": "sleep_nightmares_sensitive_empathy_family",
                    "userShare": "Tôi bị ảnh hưởng nhiều bởi cảm xúc của gia đình",
                    "botResponse": "Gia đình là môi trường gần gũi nên cảm xúc lan truyền rất mạnh. Nhưng bạn không phải chịu trách nhiệm sửa chữa tất cả mọi cảm xúc trong nhà. Việc bạn nghỉ ngơi tốt cũng là một cách bảo vệ chính mình."
                  },
                  {
                    "id": "sleep_nightmares_sensitive_empathy_friends",
                    "userShare": "Tôi hay lo cho bạn bè nên mơ liên quan đến họ",
                    "botResponse": "Khi bạn quan tâm nhiều đến ai đó, não có thể 'diễn tập' các tình huống trong giấc mơ. Điều đó không có nghĩa là chuyện xấu sẽ xảy ra. Đó chỉ là sự phản chiếu của sự quan tâm."
                  }
                ]
              },
              {
                "id": "sleep_nightmares_sensitive_stress_accumulate",
                "userShare": "Tôi không thấy mình quá stress nhưng vẫn hay mơ xấu",
                "botResponse": "Không phải lúc nào stress cũng biểu hiện rõ ràng. Với người nhạy cảm, bạn có thể vẫn hoạt động bình thường ban ngày nhưng bên trong đã tích tụ nhiều kích thích nhỏ. Khi ngủ, não sẽ xử lý những điều đó qua giấc mơ. Bạn có thể thử dành 5–10 phút mỗi tối viết ra: hôm nay mình đã trải qua điều gì, mình cảm thấy thế nào. Việc gọi tên cảm xúc giúp não xử lý chúng khi bạn còn thức thay vì để chúng xuất hiện trong mơ.",
                "children": [
                  {
                    "id": "sleep_nightmares_sensitive_hidden_anxiety",
                    "userShare": "Tôi thấy mình bình thường nhưng đêm lại lo lắng",
                    "botResponse": "Ban ngày bạn có thể bận rộn nên không nhận ra cảm xúc. Đêm đến, khi mọi thứ yên tĩnh, những điều chưa được chú ý sẽ nổi lên. Điều này không có nghĩa bạn yếu đuối, mà là não bạn đang cố gắng hoàn thành việc xử lý cảm xúc."
                  }
                ]
              },
            ]
          }
        ]
      },
      {
        "id": "sleep_consequences",
        "userShare": "Mất ngủ khiến tôi mệt mỏi, học hành sa sút",
        "botResponse": "Thiếu ngủ ảnh hưởng rất lớn đến khả năng tập trung, trí nhớ và tâm trạng. Bạn có thể thấy mệt mỏi, cáu gắt, học kém hơn. Điều này lại càng gây căng thẳng, tạo vòng lặp. Hãy cùng tìm cách cải thiện giấc ngủ để phá vỡ vòng lặp này. Bạn đã thử những biện pháp nào chưa?",
        "children": [
          {
            "id": "sleep_consequences_fatigue",
            "userShare": "Tôi luôn buồn ngủ trong lớp, không tập trung",
            "botResponse": "Buồn ngủ ban ngày là hậu quả rõ rệt của mất ngủ. Bạn có thể thử ngủ trưa ngắn 15-20 phút để lấy lại năng lượng, nhưng đừng ngủ quá lâu. Ngoài ra, hãy cố gắng duy trì giờ giấc ngủ đều đặn, kể cả cuối tuần. Điều này giúp đồng hồ sinh học ổn định. Bạn có thể lập một lịch trình ngủ cụ thể không?",
            "children": [
              {
                "id": "sleep_consequences_fatigue_schedule",
                "userShare": "Tôi thường thức khuya học bài, sáng dậy muộn",
                "botResponse": "Thức khuya học bài có thể hiệu quả trước mắt, nhưng về lâu dài làm rối loạn giấc ngủ. Hãy thử điều chỉnh: dậy sớm hơn để học thay vì thức khuya. Ánh sáng ban ngày giúp bạn tỉnh táo và ngủ ngon hơn vào ban đêm. Bạn có thể thử dậy sớm 30 phút mỗi ngày và xem thay đổi thế nào."
              }
            ]
          },
          {
            "id": "sleep_consequences_mood",
            "userShare": "Tôi dễ cáu gắt, buồn vô cớ vì thiếu ngủ",
            "botResponse": "Thiếu ngủ ảnh hưởng lớn đến cảm xúc. Khi mệt, bạn dễ phản ứng mạnh hơn với những điều nhỏ nhặt. Hãy chú ý chăm sóc bản thân, cho phép mình nghỉ ngơi nhiều hơn. Nếu cảm thấy quá tải, hãy chia sẻ với người thân hoặc bạn bè. Đôi khi chỉ cần ngủ đủ giấc, tâm trạng cũng cải thiện đáng kể."
          }
        ]
      },
      {
        "id": "sleep_improvement",
        "userShare": "Làm thế nào để ngủ ngon hơn?",
        "botResponse": "Có nhiều cách để cải thiện giấc ngủ, từ thói quen sinh hoạt đến kỹ thuật thư giãn. Bạn muốn bắt đầu từ đâu? Ví dụ: thiết lập giờ ngủ cố định, tạo không gian thoải mái, hay thực hành các bài tập thư giãn?",
        "children": [
          {
            "id": "sleep_improvement_routine",
            "userShare": "Tôi muốn tạo thói quen ngủ đều đặn",
            "botResponse": "Tuyệt vời! Hãy bắt đầu bằng việc đi ngủ và thức dậy cùng giờ mỗi ngày, kể cả cuối tuần. Trước khi ngủ 30-60 phút, hãy tạo một 'nghi thức thư giãn' như: tắm nước ấm, đọc sách, nghe nhạc nhẹ, viết nhật ký. Tránh thiết bị điện tử. Bạn có thể thử trong 1 tuần và ghi lại cảm nhận.",
            "children": [
              {
                "id": "sleep_improvement_routine_weekend",
                "userShare": "Cuối tuần tôi thường ngủ bù, có sao không?",
                "botResponse": "Ngủ bù cuối tuần có thể phá vỡ đồng hồ sinh học, khiến bạn khó ngủ vào tối chủ nhật. Tốt nhất là duy trì giờ giấc ổn định, nhưng nếu bạn muốn ngủ thêm, hãy chỉ thêm 1-2 giờ thôi. Và vẫn cố gắng thức dậy không quá trễ."
              }
            ]
          },
          {
            "id": "sleep_improvement_relaxation",
            "userShare": "Tôi muốn học cách thư giãn trước khi ngủ",
            "botResponse": "Có nhiều kỹ thuật thư giãn: thở sâu, thiền, yoga nhẹ, tưởng tượng. Bạn có thể thử bài tập 'quét cơ thể': nằm thoải mái, tập trung vào từng bộ phận từ đầu đến chân, thả lỏng chúng. Mỗi tối dành 5-10 phút. Bạn muốn mình hướng dẫn chi tiết không?",
            "children": [
              {
                "id": "sleep_improvement_relaxation_breathing",
                "userShare": "Dạy tôi bài thở để dễ ngủ",
                "botResponse": "Bài thở 4-7-8 rất tốt: hít vào bằng mũi 4 giây, giữ hơi 7 giây, thở ra chậm bằng miệng 8 giây. Lặp lại 4-5 lần. Cách thở này kích hoạt hệ thần kinh phó giao cảm, giúp cơ thể thư giãn. Bạn có thể tập khi nằm trên giường."
              }
            ]
          },
          {
            "id": "sleep_improvement_diet",
            "userShare": "Chế độ ăn uống có ảnh hưởng không?",
            "botResponse": "Có. Tránh ăn quá no hoặc đói trước khi ngủ. Hạn chế đồ ngọt, caffeine, rượu bia. Một số thực phẩm có thể hỗ trợ: sữa ấm, chuối, yến mạch. Bạn có thể thử uống một cốc sữa ấm trước khi ngủ."
          }
        ]
      }
    ]
  },
  "relationship": {
    "topic": "Mối Quan Hệ",
    "greeting": "Chuyện tình cảm bạn bè, gia đình hay rung động đầu đời luôn là điều quan trọng với tuổi học trò. Bạn đang gặp niềm vui hay nỗi buồn nào? Hãy chia sẻ để mình cùng lắng nghe và đồng hành nhé! 💌",
    "conversations": [
      {
        "id": "relationship_friends",
        "userShare": "Tôi có chuyện với bạn bè",
        "botResponse": "Tình bạn rất quý giá nhưng đôi khi cũng có những lúc khiến ta tổn thương hoặc bối rối. Bạn có thể kể rõ hơn: đó là mâu thuẫn, cảm giác bị bỏ rơi, hay khó khăn trong việc kết bạn?",
        "children": [
          {
            "id": "relationship_friends_conflict",
            "userShare": "Tôi và bạn thân đang giận nhau",
            "botResponse": "Giận nhau với bạn thân là điều rất khó chịu. Bạn có thể muốn kể xem chuyện gì đã xảy ra? Có thể là hiểu lầm, hay do một hành động khiến bạn tổn thương?",
            "children": [
              {
                "id": "relationship_friends_conflict_misunderstanding",
                "userShare": "Chỉ là hiểu lầm nhỏ nhưng không ai chịu nói trước",
                "botResponse": "Hiểu lầm nhỏ mà không giải thích có thể lớn dần. Có thể bạn đang chờ đợi đối phương lên tiếng trước? Nếu vậy, hãy thử là người chủ động. Bạn có thể nhắn tin hoặc gặp mặt và nói: 'Mình cảm thấy buồn vì chuyện vừa rồi, mình muốn nghe ý kiến của bạn.' Đôi khi chỉ cần một lời nói mở lòng là mọi chuyện tan biến.",
                "children": [
                  {
                    "id": "relationship_friends_conflict_misunderstanding_afraid",
                    "userShare": "Tôi sợ nếu mình nói trước sẽ bị coi là yếu thế",
                    "botResponse": "Suy nghĩ đó rất phổ biến, nhưng trong tình bạn, sự dũng cảm mở lời lại thể hiện bạn coi trọng mối quan hệ hơn cái tôi. Không ai coi bạn là yếu thế cả, ngược lại họ sẽ thấy bạn chân thành. Nếu bạn ấy là bạn thật sự, họ sẽ trân trọng điều đó."
                  },
                  {
                    "id": "relationship_friends_conflict_misunderstanding_stubborn",
                    "userShare": "Bạn ấy rất cứng đầu, chắc chắn không chịu nghe",
                    "botResponse": "Có những người khó mở lòng, nhưng bạn vẫn có thể thử bằng cách viết thư hoặc nhắn tin dài, bày tỏ cảm xúc mà không đổ lỗi. Ví dụ: 'Mình nhớ những lúc chúng mình vui vẻ, mình mong chúng ta có thể nói chuyện lại.' Đôi khi cách gián tiếp lại dễ tiếp nhận hơn."
                  }
                ]
              },
              {
                "id": "relationship_friends_conflict_betrayal",
                "userShare": "Bạn ấy nói xấu tôi sau lưng",
                "botResponse": "Bị bạn thân nói xấu sau lưng thực sự rất đau lòng. Bạn có thể cảm thấy bị phản bội. Trước hết, hãy cho phép mình có những cảm xúc tiêu cực. Sau đó, bạn có thể cân nhắc nói chuyện trực tiếp với bạn ấy để hiểu rõ sự việc. Có thể có hiểu lầm, hoặc bạn ấy đã có hành động không đúng. Dù thế nào, bạn cũng xứng đáng được tôn trọng.",
                "children": [
                  {
                    "id": "relationship_friends_conflict_betrayal_confront",
                    "userShare": "Tôi nên nói thế nào khi gặp bạn ấy?",
                    "botResponse": "Bạn có thể bắt đầu bằng câu: 'Mình nghe nói bạn đã nói điều đó về mình, mình cảm thấy rất buồn và muốn hỏi bạn có thật sự nghĩ vậy không?' Hãy giữ bình tĩnh, lắng nghe phản hồi. Nếu bạn ấy thừa nhận và xin lỗi, có thể hàn gắn. Nếu không, bạn có thể quyết định giữ khoảng cách để bảo vệ mình."
                  },
                  {
                    "id": "relationship_friends_conflict_betrayal_forgive",
                    "userShare": "Tôi không biết có nên tha thứ không",
                    "botResponse": "Tha thứ là một quá trình, không phải là bắt buộc. Bạn có quyền giữ khoảng cách cho đến khi cảm thấy sẵn sàng. Hãy lắng nghe trái tim mình: nếu tình bạn này thực sự quan trọng và bạn ấy thành tâm hối lỗi, bạn có thể cho cơ hội. Nhưng nếu lặp lại nhiều lần, hãy cân nhắc."
                  }
                ]
              },
              {
                "id": "relationship_friends_conflict_third_party",
                "userShare": "Có người thứ ba phá hoại tình bạn của chúng tôi",
                "botResponse": "Chuyện này thường xảy ra, nhất là khi có hiểu lầm hoặc ghen tị. Bạn có thể chia sẻ với bạn mình về những gì bạn nghe được, và cùng nhau đối thoại. Đừng để người thứ ba chi phối mối quan hệ của hai bạn. Nếu bạn ấy tin người ngoài hơn, có thể tình bạn chưa đủ bền chặt."
              }
            ]
          },
          {
            "id": "relationship_friends_lonely",
            "userShare": "Tôi cảm thấy cô đơn, không có bạn thân",
            "botResponse": "Cảm giác cô đơn giữa đám đông thực sự rất khó chịu. Bạn có thể thấy mình lạc lõng, không ai hiểu. Điều này có thể xảy ra khi bạn chuyển trường, hoặc thay đổi môi trường. Hãy thử tham gia các câu lạc bộ, hoạt động ngoại khóa để gặp những người cùng sở thích. Bạn thích làm gì vào thời gian rảnh?",
            "children": [
              {
                "id": "relationship_friends_lonely_shy",
                "userShare": "Tôi nhút nhát, không dám bắt chuyện với ai",
                "botResponse": "Nhút nhát không phải là xấu, nhưng nó có thể khiến bạn khó kết bạn hơn. Hãy bắt đầu bằng những bước nhỏ: cười với một bạn trong lớp, hỏi mượn bút, khen một bạn về món đồ dễ thương. Dần dần, bạn sẽ tự tin hơn. Bạn cũng có thể tìm những bạn có tính cách hiền lành, dễ gần.",
                "children": [
                  {
                    "id": "relationship_friends_lonely_shy_practice",
                    "userShare": "Tôi sợ bị từ chối nên không dám nói",
                    "botResponse": "Sợ bị từ chối là nỗi sợ lớn nhất. Nhưng hãy thử nghĩ: nếu bạn không nói, cơ hội là 0%. Còn nếu bạn nói, có thể thành công. Và nếu bị từ chối, cũng chẳng mất gì, bạn vẫn là bạn. Hãy tập trung vào những người có vẻ thân thiện. Không ai cười nhạo bạn vì cố gắng kết bạn đâu."
                  }
                ]
              },
              {
                "id": "relationship_friends_lonely_online",
                "userShare": "Tôi chỉ có bạn trên mạng, không có bạn ngoài đời",
                "botResponse": "Bạn trên mạng cũng là bạn, nhưng gặp gỡ trực tiếp vẫn rất quan trọng. Bạn có thể thử rủ một vài bạn trong lớp đi chơi, hoặc tham gia các sự kiện offline. Nếu cảm thấy khó, hãy bắt đầu bằng việc trò chuyện nhiều hơn với bạn cùng bàn. Dần dần, bạn sẽ có những kết nối thực tế."
              }
            ]
          },
          {
            "id": "relationship_friends_peer_pressure",
            "userShare": "Bạn bè ép tôi làm những điều tôi không muốn",
            "botResponse": "Khi bạn bè gây áp lực, bạn có thể cảm thấy rất khó xử: vừa muốn giữ lập trường của mình, vừa sợ bị tách khỏi nhóm. Ở tuổi học trò, nhu cầu được thuộc về một nhóm là rất mạnh, nên cảm giác này hoàn toàn dễ hiểu. Áp lực đó thường khiến bạn thấy mệt mỏi, lo lắng, hay tự trách bản thân? Bạn đang gặp kiểu áp lực nào?",
            "children": [
              {
                "id": "relationship_friends_peer_pressure_fit_in",
                "userShare": "Tôi cảm thấy mình phải giống họ mới được chơi cùng",
                "botResponse": "Việc phải thay đổi bản thân để được chấp nhận có thể khiến bạn dần đánh mất sự tự nhiên của mình. Nếu mỗi lần ở cạnh họ bạn phải suy nghĩ 'mình có đang đủ giống họ chưa?', thì đó là dấu hiệu bạn đang cố gắng quá nhiều. Tình bạn lành mạnh cho phép bạn là chính mình mà không cần diễn vai.",
                "children":[
                  {
                    "id": "relationship_friends_peer_pressure_isolation",
                    "userShare": "Tôi sợ nếu không làm theo sẽ bị bỏ rơi",
                    "botResponse": "Nỗi sợ bị bỏ rơi là một cảm xúc rất thật và rất mạnh. Nhưng nếu một nhóm chỉ chấp nhận bạn khi bạn thay đổi để giống họ, thì đó không phải sự kết nối thật sự. Bạn xứng đáng được tôn trọng vì con người thật của mình, chứ không phải phiên bản bạn cố gắng trở thành."
                  },
                  {
                    "id": "relationship_friends_peer_pressure_exhausted",
                    "userShare": "Tôi thấy mệt khi cứ phải giả vờ",
                    "botResponse": "Cảm giác mệt mỏi đó là tín hiệu cho thấy bạn đang không sống đúng với mình. Bạn không cần phải cắt đứt ngay, nhưng có thể thử giảm dần việc cố gắng làm vừa lòng họ. Hãy dành thời gian cho những người khiến bạn thấy thoải mái hơn."
                  }
                ]
              },
              {
                "id": "relationship_friends_peer_pressure_uncomfortable",
                "userShare": "Họ rủ tôi làm điều tôi thấy không thoải mái",
                "botResponse": "Cảm giác không thoải mái là một dạng 'chuông báo bên trong'. Nó giúp bạn nhận ra ranh giới của mình. Bạn hoàn toàn có quyền nói 'không' một cách bình tĩnh. Người thực sự tôn trọng bạn sẽ hiểu, dù có thể họ trêu một chút lúc đầu."
              },
              {
                "id": "relationship_friends_peer_pressure_comparison",
                "userShare": "Họ hay so sánh tôi với người khác",
                "botResponse": "Bị so sánh liên tục có thể làm bạn nghi ngờ giá trị của mình. Nhưng mỗi người có điểm mạnh và tốc độ phát triển khác nhau. Việc bị đem ra so với người khác không phản ánh bạn kém cỏi, mà chỉ cho thấy cách nhìn của họ còn hạn hẹp."
              }
            ]
          }
        ]
      },
      {
        "id": "relationship_family",
        "userShare": "Tôi có chuyện với gia đình",
        "botResponse": "Gia đình là nơi ta mong được yêu thương nhất, nhưng cũng có thể xảy ra những xung đột, áp lực. Bạn muốn nói về điều gì? Mâu thuẫn với cha mẹ, cảm giác bị so sánh, hay thiếu sự quan tâm?",
        "children": [
          {
            "id": "relationship_family_conflict_parents",
            "userShare": "Tôi hay cãi nhau với cha mẹ",
            "botResponse": "Xung đột với cha mẹ là điều khó tránh ở tuổi mới lớn, khi bạn muốn tự lập và cha mẹ vẫn lo lắng. Thường thì các cuộc cãi vã xoay quanh việc học, giờ giấc, hay bạn bè. Bạn có thể kể một tình huống gần đây nhất không?",
            "children": [
              {
                "id": "relationship_family_conflict_parents_study",
                "userShare": "Cha mẹ ép tôi học quá nhiều, tôi không có thời gian chơi",
                "botResponse": "Áp lực học tập từ cha mẹ khiến bạn cảm thấy ngột ngạt. Bạn có thể thử nói chuyện với cha mẹ một cách bình tĩnh, bày tỏ mong muốn có thời gian thư giãn. Ví dụ: 'Con hiểu ba mẹ muốn con học tốt, nhưng con cũng cần thời gian nghỉ ngơi để cân bằng. Con hứa sẽ học tập nghiêm túc, nhưng xin ba mẹ cho con một chút tự do.'",
                "children": [
                  {
                    "id": "relationship_family_conflict_parents_study_negotiate",
                    "userShare": "Tôi đã nói nhưng họ không nghe",
                    "botResponse": "Nếu nói một lần chưa hiệu quả, bạn có thể nhờ một người trung gian như cô, dì, hoặc giáo viên chủ nhiệm. Đôi khi cha mẹ cần nghe từ người khác. Bạn cũng có thể viết một bức thư bày tỏ cảm xúc, vì viết thư giúp bạn diễn đạt sâu sắc hơn và cha mẹ có thời gian suy nghĩ."
                  }
                ]
              },
              {
                "id": "relationship_family_conflict_parents_freedom",
                "userShare": "Cha mẹ kiểm soát tôi quá mức, không cho ra ngoài",
                "botResponse": "Cảm giác bị giam cầm thực sự khó chịu. Có thể cha mẹ bạn quá lo lắng cho sự an toàn. Hãy thử xây dựng lòng tin bằng cách chứng minh bạn có trách nhiệm: về nhà đúng giờ, báo cáo mỗi khi đi đâu. Khi họ thấy bạn đáng tin, họ sẽ nới lỏng dần. Bạn có thể đề nghị một thỏa thuận: 'Con sẽ về trước 9 giờ tối và báo mỗi giờ, ba mẹ thấy được không?'"
              },
              {
                "id": "relationship_family_conflict_parents_money",
                "userShare": "Cha mẹ không cho tôi tiền tiêu vặt, tôi thấy ngại với bạn bè",
                "botResponse": "Chuyện tiền bạc có thể gây áp lực. Hãy thử nói chuyện thẳng thắn với cha mẹ về nhu cầu của bạn, và cùng nhau lập một khoản tiêu vặt hợp lý. Nếu cha mẹ khó khăn, bạn có thể tìm cách tự kiếm thêm như làm việc nhà, phụ giúp hàng xóm. Đừng so sánh với bạn bè vì hoàn cảnh mỗi nhà khác nhau."
              }
            ]
          },
          {
            "id": "relationship_family_comparison",
            "userShare": "Cha mẹ hay so sánh tôi với người khác",
            "botResponse": "Bị so sánh khiến ta cảm thấy tự ti và không được công nhận. Bạn có thể nói với cha mẹ: 'Mỗi lần ba mẹ so sánh con với người khác, con cảm thấy rất buồn và áp lực. Con muốn ba mẹ nhìn nhận những cố gắng của con.' Nếu chưa thể nói trực tiếp, hãy viết ra. Quan trọng là bạn biết mình có giá trị riêng, không cần phải giống ai.",
            "children": [
              {
                "id": "relationship_family_comparison_sibling",
                "userShare": "Cha mẹ so sánh tôi với anh chị",
                "botResponse": "Điều này đặc biệt khó chịu. Hãy nhớ rằng mỗi người đều có điểm mạnh riêng. Bạn có thể nói với cha mẹ: 'Con biết anh/chị giỏi, nhưng con cũng có những ưu điểm khác. Con mong ba mẹ yêu con vì chính con.'"
              },
              {
                "id": "stress_family_comp_other_child",
                "userShare": "Cha mẹ luôn so sánh tôi với 'con nhà người ta'",
                "botResponse": "Bị so sánh với 'con nhà người ta' có thể khiến bạn cảm thấy mình không bao giờ đủ tốt. Điều đó rất mệt mỏi, vì bạn đang bị đặt vào một tiêu chuẩn không do mình lựa chọn. Khi nghe những lời so sánh đó, bạn thường cảm thấy buồn, tức giận hay bất lực hơn?",
                "children": [
                  {
                    "id": "stress_family_comp_other_child_fail",
                    "userShare": "Tôi cảm thấy mình chẳng làm gì cũng không đủ",
                    "botResponse": "Khi bị so sánh liên tục, bạn dễ hình thành suy nghĩ rằng 'mình luôn kém'. Nhưng hãy dừng lại và tự hỏi: đó là sự thật tuyệt đối, hay chỉ là cách người khác nhìn nhận? Giá trị của bạn không phụ thuộc vào việc bạn có giống 'con nhà người ta' hay không. Bạn có những điểm mạnh riêng, dù có thể chưa được công nhận."
                  },
                  {
                    "id": "stress_family_comp_other_child_angry",
                    "userShare": "Tôi rất tức giận mỗi khi nghe câu đó",
                    "botResponse": "Tức giận là phản ứng tự nhiên khi bạn cảm thấy không được công bằng. Cảm xúc đó không sai. Điều quan trọng là bạn xử lý nó thế nào. Bạn có thể thử nói với cha mẹ: 'Con sẽ cố gắng theo cách của con, nhưng khi bị so sánh con cảm thấy rất áp lực.' Nói về cảm xúc thay vì phản kháng sẽ dễ được lắng nghe hơn."
                  },
                  {
                    "id": "stress_family_comp_other_child_pressure",
                    "userShare": "Tôi bắt đầu ghét luôn cả người bị đem ra so sánh",
                    "botResponse": "Việc bạn khó chịu với người đó là điều dễ hiểu, vì họ vô tình trở thành biểu tượng của áp lực. Nhưng thực ra họ không phải nguyên nhân. Vấn đề nằm ở cách so sánh. Nếu có thể, hãy tách người đó ra khỏi cảm xúc của bạn và tập trung vào con đường riêng của mình."
                  },
                  {
                    "id": "stress_family_comp_other_child_giveup",
                    "userShare": "Tôi muốn bỏ cuộc vì dù sao cũng không bằng họ",
                    "botResponse": "Khi bạn nghĩ 'mình không bao giờ bằng họ', đó là suy nghĩ mang tính tuyệt đối và dễ khiến bạn mất động lực. Nhưng cuộc sống không phải cuộc đua một đường thẳng. Thành công có nhiều dạng khác nhau. Bạn có thể chưa nổi bật ở lĩnh vực này, nhưng biết đâu bạn sẽ tỏa sáng ở lĩnh vực khác. Điều quan trọng là bạn không từ bỏ chính mình."
                  },
                  {
                    "id": "stress_family_comp_other_child_selfworth",
                    "userShare": "Tôi bắt đầu nghi ngờ giá trị của bản thân",
                    "botResponse": "So sánh lâu dài có thể làm lung lay giá trị bản thân. Nhưng giá trị của bạn không phải do thành tích hay lời khen quyết định. Bạn có tính cách, suy nghĩ, cảm xúc và ước mơ riêng — đó là điều không ai thay thế được. Bạn có thể thử viết ra 3 điều bạn làm được trong tuần này, dù nhỏ. Điều đó giúp bạn nhìn thấy sự tiến bộ của chính mình."
                  }
                ]
              }
            ]
          },
          {
            "id": "relationship_family_divorce",
            "userShare": "Cha mẹ tôi ly hôn, tôi rất buồn",
            "botResponse": "Ly hôn của cha mẹ là một tổn thất lớn với con cái. Bạn có thể cảm thấy buồn, giận, hoặc thậm chí có lỗi. Nhưng hãy nhớ rằng đó là quyết định của người lớn, không phải lỗi của bạn. Bạn vẫn được cả cha và mẹ yêu thương, chỉ là họ không sống cùng nhau nữa. Hãy chia sẻ cảm xúc với người bạn tin tưởng, hoặc viết nhật ký. Nếu cần, hãy tìm đến chuyên gia tâm lý để vượt qua giai đoạn này.",
            "children": [
              {
                "id": "relationship_family_divorce_feelings",
                "userShare": "Tôi giận cha mẹ vì đã chia tay",
                "botResponse": "Giận là cảm xúc tự nhiên. Bạn có quyền giận, nhưng hãy tìm cách giải tỏa lành mạnh: nói chuyện, viết ra, hoặc tham gia hoạt động thể thao. Dần dần, bạn sẽ chấp nhận và hiểu rằng cuộc sống vẫn tiếp diễn."
              }
            ]
          },
          {
            "id": "relationship_family_neglect",
            "userShare": "Tôi cảm thấy cha mẹ không quan tâm đến mình",
            "botResponse": "Thiếu sự quan tâm từ cha mẹ khiến bạn cô đơn và tổn thương. Có thể cha mẹ bạn quá bận rộn với công việc, hoặc họ không biết cách thể hiện tình cảm. Bạn có thể thử chủ động chia sẻ với họ về những điều bạn thích, những khó khăn bạn gặp. Đôi khi cha mẹ không nhận ra bạn cần họ. Nếu vẫn không thay đổi, hãy tìm sự quan tâm từ người thân khác, thầy cô, hoặc bạn bè."
          }
        ]
      },

      {
        "id": "relationship_love",
        "userShare": "Tôi có tình cảm tuổi học trò",
        "botResponse": "Rung động đầu đời thật đẹp và cũng nhiều bối rối. Bạn có thể chia sẻ thêm không? ",
        "children":[
          {
            "id": "relationship_crush",
            "userShare": "Tôi thích một bạn",
            "botResponse": "Cảm giác thích ai đó thường khiến tim mình đập nhanh hơn và ngày trở nên thú vị hơn. Nhưng đi kèm đó cũng có thể là lo lắng, tự ti hoặc suy nghĩ rất nhiều. Bạn đang cảm thấy điều gì rõ nhất lúc này?",
            "children": [
              {
                "id": "relationship_crush_confess",
                "userShare": "Tôi muốn tỏ tình nhưng sợ bị từ chối",
                "botResponse": "Tỏ tình luôn cần dũng khí. Bạn sợ bị từ chối vì sợ mất người ấy, hay sợ cảm giác xấu hổ?",
                "children": [
                  {
                    "id": "relationship_crush_confess_afraid_rejection",
                    "userShare": "Tôi sợ bị từ chối rồi mất bạn",
                    "botResponse": "Nỗi sợ đó rất thật. Bạn có thể nói rõ rằng dù câu trả lời thế nào, bạn vẫn trân trọng tình bạn. Nếu họ là người hiểu chuyện, họ sẽ tôn trọng sự chân thành của bạn."
                  },
                  {
                    "id": "relationship_crush_confess_shy",
                    "userShare": "Tôi quá nhút nhát, không dám nói trực tiếp",
                    "botResponse": "Nếu nói trực tiếp quá khó, bạn có thể viết một tin nhắn chân thành, ngắn gọn. Điều quan trọng không phải là cách hoàn hảo, mà là sự thật lòng."
                  }
                ]
              },
              {
                "id": "relationship_crush_uncertain",
                "userShare": "Tôi không biết bạn ấy có thích mình không",
                "botResponse": "Đoán cảm xúc người khác rất dễ khiến ta suy nghĩ nhiều. Bạn đang dựa vào dấu hiệu rõ ràng nào, hay phần lớn là suy đoán của mình?",
                "children": [
                  {
                    "id": "relationship_crush_overthinking",
                    "userShare": "Tôi suy nghĩ về bạn ấy suốt ngày",
                    "botResponse": "Khi thích ai đó, não mình dễ lặp lại hình ảnh và tin nhắn. Nếu điều đó làm bạn mất tập trung, hãy thử chia nhỏ thời gian học và ghi lại suy nghĩ để xử lý sau."
                  },
                  {
                    "id": "relationship_crush_message_anxiety",
                    "userShare": "Bạn ấy không trả lời tin nhắn làm tôi lo lắng",
                    "botResponse": "Chờ đợi dễ khiến ta tưởng tượng điều xấu. Nhưng có thể họ chỉ bận. Bạn có bằng chứng chắc chắn không, hay chỉ là suy nghĩ của mình?"
                  }
                ]
              },
              {
                "id": "relationship_crush_insecure",
                "userShare": "Tôi thấy mình không đủ tốt",
                "botResponse": "Khi thích ai đó, ta hay so sánh bản thân với người khác. Nhưng tình cảm không phải cuộc thi. Điều gì khiến bạn cảm thấy mình thua kém?",
                "children": [
                  {
                    "id": "relationship_crush_insecure_academic",
                    "userShare": "Bạn ấy học giỏi hơn tôi",
                    "botResponse": "Học giỏi là một điểm mạnh, nhưng không phải toàn bộ giá trị con người. Bạn cũng có những điểm mạnh riêng. Bạn đã từng được khen về điều gì?"
                  },
                  {
                    "id": "relationship_crush_insecure_appearance",
                    "userShare": "Tôi tự ti về ngoại hình",
                    "botResponse": "Nhiều người khi thích ai đó đều nhạy cảm về ngoại hình. Nhưng điều khiến người khác gắn bó lâu dài là sự ấm áp và chân thành của bạn."
                  }
                ]
              },
              {
                "id": "relationship_crush_peer_pressure",
                "userShare": "Tôi sợ bạn bè biết rồi trêu",
                "botResponse": "Bị trêu có thể khiến bạn xấu hổ. Nhưng việc bạn có tình cảm không phải điều sai. Bạn có thể chọn chỉ chia sẻ với người thật sự tin tưởng."
              },
              {
                "id": "relationship_crush_unrequited",
                "userShare": "Tôi thích bạn ấy nhưng bạn ấy không thích mình",
                "botResponse": "Bị từ chối rất đau, nhưng điều đó không định nghĩa giá trị của bạn. Bạn đang buồn vì mất người ấy, hay vì bạn cảm thấy mình không đủ tốt?",
                "children": [
                  {
                    "id": "relationship_crush_unrequited_sad",
                    "userShare": "Tôi buồn quá, không muốn làm gì",
                    "botResponse": "Buồn là điều tự nhiên. Hãy cho mình thời gian, nhưng đừng tự cô lập. Làm một việc nhỏ bạn thích hôm nay có thể giúp cảm xúc dịu lại."
                  },
                  {
                    "id": "relationship_crush_unrequited_selfworth",
                    "userShare": "Tôi cảm thấy mình thua kém người khác",
                    "botResponse": "Tình cảm không phải sự so sánh. Người phù hợp sẽ chọn bạn vì chính bạn. Bạn có thể thử viết ra 3 điều khiến bạn tự hào về bản thân."
                  },
                  {
                    "id": "relationship_crush_friend_after_reject",
                    "userShare": "Tôi vẫn muốn làm bạn",
                    "botResponse": "Điều đó rất trưởng thành. Nhưng trước tiên hãy chắc rằng bạn đã ổn và không còn hy vọng âm thầm, nếu không bạn sẽ dễ tổn thương thêm."
                  }
                ]
              },
            ]
          },
          {
            "id": "relationship_being_liked",
            "userShare": "Có bạn thích tôi",
            "botResponse": "Được người khác thích có thể khiến bạn vui, ngại ngùng, hoặc áp lực. Quan trọng nhất là cảm xúc của bạn lúc này. Bạn đang thấy thoải mái hay đang bối rối?",
            "children": [
              {
                "id": "relationship_being_liked_reject",
                "userShare": "Tôi muốn từ chối nhưng sợ bạn ấy tổn thương",
                "botResponse": "Bạn đang nghĩ cho cảm xúc của người khác, điều đó rất tử tế. Nhưng kéo dài sự im lặng có thể khiến họ hy vọng nhiều hơn. Bạn sợ điều gì nhất khi nói lời từ chối?",
                "children": [
                  {
                    "id": "relationship_being_liked_reject_guilt",
                    "userShare": "Tôi cảm thấy có lỗi",
                    "botResponse": "Cảm giác có lỗi xuất hiện khi ta làm người khác buồn. Nhưng bạn không có trách nhiệm phải đáp lại tình cảm nếu trái tim bạn không có cảm xúc tương tự. Thành thật là cách tôn trọng cả hai."
                  },
                  {
                    "id": "relationship_being_liked_reject_awkward",
                    "userShare": "Tôi sợ sau này gặp lại sẽ ngại",
                    "botResponse": "Có thể sẽ có chút ngại lúc đầu, nhưng sự rõ ràng giúp mọi thứ nhẹ nhàng hơn về lâu dài. Nếu cả hai cư xử trưởng thành, sự ngại ngùng sẽ giảm dần."
                  },
                  {
                    "id": "relationship_being_liked_reject_script",
                    "userShare": "Tôi không biết phải nói thế nào",
                    "botResponse": "Bạn có thể nói đơn giản: 'Mình trân trọng tình cảm của bạn, nhưng mình chưa có cảm xúc như vậy. Mình mong bạn hiểu.' Ngắn gọn, rõ ràng và chân thành là đủ."
                  }
                ]
              },
              {
                "id": "relationship_being_liked_unsure",
                "userShare": "Tôi không chắc mình có thích lại không",
                "botResponse": "Không chắc chắn là điều bình thường. Bạn có thấy rung động tự nhiên khi ở gần họ, hay chỉ là cảm giác 'mình nên thử'?",
                "children": [
                  {
                    "id": "relationship_being_liked_unsure_pressure",
                    "userShare": "Tôi thấy áp lực vì bạn ấy thích mình nhiều quá",
                    "botResponse": "Khi người khác thể hiện tình cảm quá mạnh, bạn có thể cảm thấy nặng nề. Tình cảm là tự nhiên, không phải vì người ta thích nhiều thì mình phải đáp lại."
                  },
                  {
                    "id": "relationship_being_liked_unsure_lonely",
                    "userShare": "Tôi sợ cô đơn nên muốn thử quen",
                    "botResponse": "Quen ai đó chỉ để lấp khoảng trống có thể khiến cả hai tổn thương sau này. Bạn xứng đáng bước vào mối quan hệ vì thật sự muốn, không phải vì sợ cô đơn."
                  },
                  {
                    "id": "relationship_being_liked_unsure_time",
                    "userShare": "Tôi muốn thêm thời gian suy nghĩ",
                    "botResponse": "Bạn hoàn toàn có quyền xin thời gian. Bạn có thể nói: 'Mình cần thêm thời gian để hiểu rõ cảm xúc của mình.' Người tôn trọng bạn sẽ chấp nhận điều đó."
                  }
                ]
              },
              {
                "id": "relationship_being_liked_pressure",
                "userShare": "Bạn ấy nhắn tin liên tục làm tôi mệt",
                "botResponse": "Nếu bạn cảm thấy mệt, đó là dấu hiệu bạn cần đặt ranh giới. Bạn có thể nói rõ thời gian bạn rảnh và không rảnh. Tình cảm không nên khiến bạn cảm thấy bị ép buộc.",
                "children": [
                  {
                    "id": "relationship_being_liked_boundary",
                    "userShare": "Tôi không biết đặt ranh giới thế nào",
                    "botResponse": "Bạn có thể nói: 'Mình không thoải mái khi nhắn tin quá nhiều. Mong bạn tôn trọng.' Ranh giới không phải sự lạnh lùng, mà là bảo vệ cảm xúc của bạn."
                  },
                  {
                    "id": "relationship_being_liked_ignore",
                    "userShare": "Tôi định phớt lờ luôn",
                    "botResponse": "Phớt lờ có thể khiến người kia bối rối và tổn thương hơn. Nếu có thể, hãy nói rõ một lần. Sự rõ ràng giúp cả hai đỡ mệt mỏi."
                  }
                ]
              },
              {
                "id": "relationship_being_liked_rumors",
                "userShare": "Bạn bè bắt đầu đồn thổi về chuyện này",
                "botResponse": "Tin đồn có thể khiến bạn khó chịu. Nhưng bạn không kiểm soát được lời người khác nói, bạn chỉ kiểm soát được cách mình phản ứng. Bạn muốn giữ im lặng hay nói rõ mọi chuyện?",
                "children": [
                  {
                    "id": "relationship_being_liked_embarrassed",
                    "userShare": "Tôi rất xấu hổ",
                    "botResponse": "Cảm giác xấu hổ thường đến khi ta sợ bị đánh giá. Nhưng việc ai đó thích bạn không phải điều sai. Bạn không làm gì sai cả."
                  }
                ]
              },
              {
                "id": "relationship_being_liked_scared",
                "userShare": "Tôi thấy hơi sợ vì bạn ấy quá theo đuổi",
                "botResponse": "Nếu bạn cảm thấy sợ, hãy lắng nghe cảm giác đó. Tình cảm lành mạnh không khiến bạn bất an. Nếu hành vi của bạn ấy làm bạn khó chịu, bạn nên nói rõ hoặc tìm người lớn đáng tin cậy để chia sẻ."
              }
            ]
          },
          {
            "id": "relationship_dating",
            "userShare": "Tôi và bạn ấy đang có tình cảm với nhau",
            "botResponse": "Có tình cảm ở tuổi học trò thường rất mãnh liệt và trong sáng, nhưng cũng dễ khiến cảm xúc lên xuống thất thường. Bạn có thể đang hạnh phúc, nhưng cũng có thể lo lắng, sợ mất nhau, hoặc áp lực vì tương lai. Bạn đang cảm thấy điều gì mạnh nhất lúc này?",
            "children": [
              {
                "id": "relationship_dating_communication",
                "userShare": "Chúng tôi hay hiểu lầm nhau",
                "botResponse": "Hiểu lầm thường không đến từ việc không yêu, mà đến từ việc kỳ vọng nhưng không nói ra. Bạn có mong người kia tự hiểu cảm xúc của mình không? Khi kỳ vọng không được đáp lại, ta dễ buồn và thất vọng.",
                "children": [
                  {
                    "id": "relationship_dating_communication_misunderstanding",
                    "userShare": "Tôi hay giận dỗi, bạn ấy không hiểu",
                    "botResponse": "Giận dỗi thường là cách gián tiếp nói 'Hãy quan tâm mình hơn'. Nhưng nếu người kia không nhận ra tín hiệu đó, khoảng cách sẽ lớn dần. Thay vì im lặng, bạn có thể nói thẳng cảm xúc: 'Mình buồn vì cảm thấy không được quan tâm.' Khi nói về cảm xúc thay vì đổ lỗi, mối quan hệ sẽ an toàn hơn."
                  },
                  {
                    "id": "relationship_dating_overthinking",
                    "userShare": "Tôi suy nghĩ rất nhiều, sợ bạn ấy hết yêu",
                    "botResponse": "Lo sợ bị bỏ rơi là cảm giác rất mạnh trong tình yêu đầu đời. Bạn có thể để ý từng tin nhắn, từng thay đổi nhỏ. Nhưng không phải mọi sự im lặng đều là dấu hiệu hết yêu. Khi bạn nhận ra mình đang suy diễn, hãy tạm dừng và tự hỏi: 'Mình có bằng chứng thật sự không, hay chỉ là nỗi sợ?'"
                  }
                ]
              },
              {
                "id": "relationship_dating_dependency",
                "userShare": "Tôi cảm thấy mình phụ thuộc vào bạn ấy quá nhiều",
                "botResponse": "Khi yêu, bạn dễ xem người kia là trung tâm cảm xúc. Nếu họ vui, bạn vui. Nếu họ lạnh nhạt, bạn hoảng sợ. Điều đó cho thấy bạn rất trân trọng mối quan hệ, nhưng nếu quá phụ thuộc, bạn sẽ đánh mất chính mình.",
                "children": [
                  {
                    "id": "relationship_dating_dependency_identity",
                    "userShare": "Tôi gần như bỏ hết bạn bè vì người yêu",
                    "botResponse": "Khi bạn thu hẹp thế giới của mình chỉ còn một người, áp lực lên mối quan hệ sẽ rất lớn. Tình yêu là một phần cuộc sống, không phải toàn bộ. Hãy từng bước kết nối lại với bạn bè, sở thích cũ. Một mối quan hệ lành mạnh cần hai người độc lập nhưng đồng hành."
                  },
                  {
                    "id": "relationship_dating_dependency_fear",
                    "userShare": "Tôi sợ nếu không chiều theo, bạn ấy sẽ rời đi",
                    "botResponse": "Nếu bạn luôn phải chiều theo để giữ người kia ở lại, đó không còn là yêu bình đẳng. Tình yêu không nên khiến bạn phải đánh đổi giá trị bản thân. Người thực sự trân trọng bạn sẽ không rời đi chỉ vì bạn nói ra nhu cầu của mình."
                  }
                ]
              },
              {
                "id": "relationship_dating_jealousy",
                "userShare": "Tôi rất hay ghen",
                "botResponse": "Ghen xuất phát từ nỗi sợ mất mát. Ở tuổi này, cảm xúc thường rất mạnh và khó kiểm soát. Nhưng ghen nếu không được xử lý sẽ làm cả hai mệt mỏi.",
                "children": [
                  {
                    "id": "relationship_dating_jealousy_control",
                    "userShare": "Tôi muốn kiểm soát bạn ấy để đỡ lo",
                    "botResponse": "Kiểm soát có thể giúp bạn bớt lo tạm thời, nhưng về lâu dài sẽ khiến mối quan hệ ngột ngạt. Sự tin tưởng không đến từ việc kiểm tra, mà từ việc cả hai minh bạch và tôn trọng nhau. Bạn có thể chia sẻ nỗi lo thay vì kiểm soát hành vi."
                  },
                  {
                    "id": "relationship_dating_jealousy_selfesteem",
                    "userShare": "Tôi sợ mình không đủ tốt",
                    "botResponse": "Ghen nhiều khi không phải vì người kia, mà vì bạn nghi ngờ giá trị của mình. Hãy nhớ: bạn được yêu không phải vì bạn hoàn hảo, mà vì bạn là chính bạn. Tự tin không đến từ việc so sánh, mà từ việc chấp nhận bản thân."
                  }
                ]
              },
              {
                "id": "relationship_dating_parents",
                "userShare": "Cha mẹ cấm cản",
                "botResponse": "Sự cấm cản có thể khiến tình yêu trở nên căng thẳng và bí mật. Bạn vừa muốn giữ người yêu, vừa muốn không làm cha mẹ thất vọng. Điều đó tạo ra xung đột nội tâm.",
                "children": [
                  {
                    "id": "relationship_dating_parents_conflict",
                    "userShare": "Tôi cảm thấy bị mắc kẹt giữa hai bên",
                    "botResponse": "Cảm giác bị mắc kẹt rất nặng nề. Bạn có thể thử nhìn lại: điều cha mẹ sợ nhất là gì? Thường là học hành sa sút hoặc bạn bị tổn thương. Nếu bạn chứng minh được sự trưởng thành và cân bằng, niềm tin sẽ dần được xây dựng."
                  }
                ]
              },
              {
                "id": "relationship_dating_breakup",
                "userShare": "Chúng tôi vừa chia tay",
                "botResponse": "Chia tay ở tuổi học trò thường rất đau vì đó có thể là lần đầu bạn gắn bó sâu sắc với ai đó. Bạn có thể cảm thấy trống rỗng, mất phương hướng, hoặc tự trách bản thân.",
                "children": [
                  {
                    "id": "relationship_dating_breakup_identity",
                    "userShare": "Tôi cảm thấy như mất đi một phần của mình",
                    "botResponse": "Khi yêu sâu, bạn gắn một phần bản sắc của mình vào mối quan hệ đó. Sau chia tay, bạn có thể thấy hụt hẫng. Hãy nhớ rằng bạn vẫn là bạn — trước khi yêu và sau khi yêu. Hãy từng bước tìm lại những điều từng làm bạn vui."
                  },
                  {
                    "id": "relationship_dating_breakup_selfblame",
                    "userShare": "Tôi nghĩ tất cả là lỗi của tôi",
                    "botResponse": "Sau chia tay, não bộ có xu hướng tìm một 'người có lỗi' để dễ chấp nhận. Nhưng hiếm khi mối quan hệ tan vỡ chỉ vì một người. Hãy nhìn lại một cách công bằng: bạn đã cố gắng như thế nào? Bạn có thể học được điều gì cho lần sau?"
                  },
                  {
                    "id": "relationship_dating_breakup_empty",
                    "userShare": "Tôi cảm thấy trống rỗng và không còn động lực",
                    "botResponse": "Trống rỗng là dấu hiệu bạn đang mất đi một nguồn cảm xúc quen thuộc. Đừng vội ép mình phải vui lại. Hãy cho bản thân thời gian. Chăm sóc những điều cơ bản như ngủ đủ, ăn uống, vận động nhẹ cũng giúp cảm xúc ổn định dần."
                  }
                ]
              }
            ]
          }
        ]
      },






    ]
  },
  "study": {
    "topic": "Học Tập",
    "greeting": "Chuyện học hành luôn là một phần quan trọng trong cuộc sống học sinh. Bạn đang gặp khó khăn về động lực, sự tập trung hay phương pháp học? Hãy chia sẻ để mình cùng tìm cách nhé! 📚",
    "conversations": [
      {
        "id": "study_motivation_loss",
        "userShare": "Tôi không còn muốn học nữa",
        "botResponse": "Cảm giác chán nản, không muốn học có thể xuất phát từ nhiều nguyên nhân. Có thể bạn đang cảm thấy mệt mỏi, không thấy ý nghĩa, hoặc đơn giản là mất hứng thú. Điều này rất phổ biến, không có nghĩa là bạn hư hay lười. Bạn có thể chia sẻ thêm: gần đây có chuyện gì khiến bạn cảm thấy như vậy không?",
        "children": [
          {
            "id": "study_motivation_no_purpose",
            "userShare": "Tôi không biết học để làm gì, thấy vô nghĩa quá",
            "botResponse": "Khi không thấy được mục đích của việc học, mọi thứ trở nên nặng nề và vô vị. Bạn có thể đang tự hỏi: 'Học những thứ này rồi để làm gì?'. Câu hỏi đó rất chính đáng. Nhiều người lớn cũng từng trải qua cảm giác này. Bạn thử nghĩ xem, điều gì khiến bạn tò mò hoặc thích thú ngoài giờ học? Có thể kết nối việc học với những điều đó sẽ giúp bạn thấy ý nghĩa hơn.",
            "children": [
              {
                "id": "study_motivation_no_purpose_future",
                "userShare": "Tôi không biết mình muốn làm gì trong tương lai",
                "botResponse": "Việc chưa rõ tương lai muốn làm gì là điều bình thường ở tuổi học sinh. Bạn không cần phải có câu trả lời ngay bây giờ. Việc học hôm nay không chỉ để phục vụ một nghề nghiệp cụ thể, mà còn giúp bạn rèn luyện tư duy, kỹ năng giải quyết vấn đề, và mở ra nhiều cánh cửa sau này. Hãy thử xem việc học như một hành trình khám phá, thay vì chỉ là nghĩa vụ. Bạn có thích tìm hiểu về lĩnh vực nào đó không?",
                "children": [
                  {
                    "id": "study_motivation_no_purpose_future_explore_interest_general",
                    "userShare": "Tôi có sở thích riêng, nhưng thấy nó không liên quan đến việc học",
                    "botResponse": "Sở thích của bạn thực ra có thể liên kết với việc học nhiều hơn bạn nghĩ. Hầu hết các môn học đều là nền tảng cho nhiều lĩnh vực khác nhau. Ví dụ: nếu bạn thích sáng tạo, Ngữ văn và Lịch sử giúp bạn hiểu câu chuyện và con người; nếu bạn thích công nghệ, Toán và Tin học là nền móng; nếu bạn thích giao tiếp, Văn và Ngoại ngữ sẽ hỗ trợ rất nhiều. Bạn có thể chia sẻ mình thích điều gì để mình cùng bạn tìm cách kết nối nó với việc học không?"
                  },
                  {
                    "id": "study_motivation_no_purpose_future_pressure",
                    "userShare": "Mọi người xung quanh ai cũng rõ ràng, còn tôi thì không",
                    "botResponse": "Đừng so sánh hành trình của mình với người khác. Mỗi người có nhịp độ riêng. Có người biết sớm, có người cần thời gian khám phá. Áp lực từ việc so sánh chỉ khiến bạn thêm mệt mỏi. Hãy tập trung vào việc tìm hiểu bản thân: điều gì khiến bạn tò mò, điều gì bạn làm mà quên thời gian? Đó có thể là manh mối cho tương lai."
                  }
                ]
              },
              {
                "id": "study_motivation_no_purpose_meaningless_content",
                "userShare": "Nhiều môn học tôi thấy chẳng có ích gì cho cuộc sống",
                "botResponse": "Cảm giác đó rất phổ biến, đặc biệt với những môn bạn không thấy hứng thú. Nhưng thử nghĩ xem: mỗi môn học đều rèn cho bạn một cách tư duy khác nhau. Ví dụ, Toán không chỉ là tính toán mà còn là logic; Văn không chỉ là viết mà còn là thấu cảm. Bạn có thể thử tìm một ứng dụng thực tế của môn học đó trong cuộc sống hàng ngày. Có khi bạn sẽ thấy thú vị hơn đấy."
              }
            ]
          },
          {
            "id": "study_motivation_comparison",
            "userShare": "Nhìn bạn bè giỏi hơn, tôi thấy mình vô dụng và mất động lực",
            "botResponse": "So sánh bản thân với người khác là con đường nhanh nhất dẫn đến tự ti và mất động lực. Bạn chỉ nhìn thấy kết quả của họ, chứ không thấy quá trình họ đã trải qua. Mỗi người có điểm mạnh và tốc độ riêng. Thay vì so sánh, hãy so sánh bạn của hôm nay với bạn của tháng trước. Bạn đã tiến bộ ở điểm nào chưa? Dù là rất nhỏ.",
            "children": [
              {
                "id": "study_motivation_comparison_jealousy",
                "userShare": "Tôi cảm thấy ghen tị và ghét bản thân vì điều đó",
                "botResponse": "Ghen tị là cảm xúc tự nhiên, nó cho thấy bạn khao khát được tốt hơn. Điều quan trọng là bạn không để nó điều khiển mình. Hãy thử biến cảm giác đó thành động lực: tìm hiểu cách bạn ấy học, xem bạn có thể học hỏi gì từ họ. Nhưng hãy nhớ, mục tiêu là để bạn tiến bộ, không phải để hơn ai đó."
              },
              {
                "id": "study_motivation_comparison_give_up",
                "userShare": "Thấy họ giỏi quá, tôi nghĩ mình cố gắng cũng vô ích",
                "botResponse": "Suy nghĩ 'tất cả hoặc không có gì' rất dễ dẫn đến bỏ cuộc. Nhưng cuộc sống không phải là cuộc đua mà chỉ có người về nhất mới đáng sống. Mỗi bước tiến nhỏ của bạn đều có giá trị. Thay vì nghĩ 'mình không thể bằng họ', hãy nghĩ 'mình có thể tốt hơn chính mình ngày hôm qua'. Bạn muốn thử đặt một mục tiêu nhỏ cho riêng mình không?"
              }
            ]
          },
          {
            "id": "study_motivation_forced",
            "userShare": "Tôi chỉ học vì bị ép, chứ không phải vì tôi muốn",
            "botResponse": "Khi học vì áp lực từ bên ngoài, bạn dễ cảm thấy ngột ngạt và mất động lực. Cảm giác như mình đang làm thuê cho người khác vậy. Bạn có muốn thử tìm ra một lý do học tập xuất phát từ chính bên trong bạn không? Dù là rất nhỏ, như học để hiểu một điều bạn tò mò, hay để có thể tự tin hơn khi nói chuyện với bạn bè.",
            "children": [
              {
                "id": "study_motivation_forced_parents",
                "userShare": "Cha mẹ bắt tôi phải học, không học là mắng",
                "botResponse": "Bị ép buộc thường xuyên có thể khiến bạn chống đối và càng ghét việc học. Bạn có thể thử nói chuyện với cha mẹ về cảm xúc của mình: 'Con hiểu ba mẹ lo cho tương lai của con, nhưng cách này làm con rất áp lực. Con muốn học vì con thấy ý nghĩa, chứ không phải vì sợ bị mắng.' Đôi khi cha mẹ cần hiểu góc nhìn của bạn.",
                "children": [
                  {
                    "id": "study_motivation_forced_parents_scared",
                    "userShare": "Tôi sợ nói ra sẽ bị mắng thêm",
                    "botResponse": "Nếu chưa thể nói trực tiếp, bạn có thể viết ra những suy nghĩ của mình và nhờ một người trung gian như cô giáo, dì, hoặc anh chị chuyển giúp. Hoặc bạn có thể chọn thời điểm cha mẹ vui vẻ để bắt đầu câu chuyện một cách nhẹ nhàng."
                  }
                ]
              },
              {
                "id": "study_motivation_forced_grades",
                "userShare": "Tôi chỉ học để được điểm cao, chứ không thấy hứng thú",
                "botResponse": "Khi chỉ tập trung vào điểm số, bạn dễ bỏ qua niềm vui khám phá kiến thức. Điểm số chỉ là một phần, nó không phản ánh hết năng lực và giá trị của bạn. Bạn có thể thử dành thời gian tìm hiểu sâu hơn một bài học nào đó bạn thấy tò mò, không cần vì điểm số. Biết đâu bạn sẽ tìm lại được hứng thú."
              }
            ]
          },
          {
            "id": "study_motivation_effort_not_reflected",
            "userShare": "Tôi học rất nhiều nhưng điểm vẫn thấp, nản quá",
            "botResponse": "Cảm giác 'công cốc' khi điểm số không phản ánh nỗ lực thực sự rất dễ khiến bạn chán nản. Nhưng điều đó không có nghĩa là bạn học kém, có thể là do phương pháp học chưa phù hợp. Bạn có muốn cùng mình xem xét lại cách học của mình không? Biết đâu chỉ cần thay đổi một chút, kết quả sẽ khác.",
            "children": [
              {
                "id": "study_motivation_effort_not_reflected_method",
                "userShare": "Tôi học thuộc lòng rất kỹ nhưng khi thi lại quên",
                "botResponse": "Học thuộc lòng mà không hiểu bản chất thì rất dễ quên. Bạn có thể thử học bằng cách hiểu ý chính, vẽ sơ đồ tư duy, hoặc giải thích lại cho người khác nghe. Khi bạn thực sự hiểu, kiến thức sẽ ở lại lâu hơn. Bạn muốn mình gợi ý phương pháp cụ thể không?"
              },
              {
                "id": "study_motivation_effort_not_reflected_focus",
                "userShare": "Tôi ngồi học hàng giờ nhưng không tập trung",
                "botResponse": "Ngồi học lâu nhưng không hiệu quả vì mất tập trung là vấn đề rất phổ biến. Có thể bạn đang học trong trạng thái mệt mỏi, hoặc không có phương pháp. Hãy thử chia nhỏ thời gian học (25 phút học, 5 phút nghỉ) và loại bỏ các yếu tố gây xao nhãng như điện thoại. Bạn đã thử cách nào chưa?"
              },
              {
                "id": "study_motivation_effort_not_reflected_self_worth",
                "userShare": "Tôi nghĩ mình không thông minh bằng người khác",
                "botResponse": "Đừng vội gán cho mình cái mác 'không thông minh'. Trí thông minh có nhiều dạng khác nhau, và điểm số chỉ đo được một phần rất nhỏ. Có thể bạn thông minh theo cách khác: giỏi giao tiếp, sáng tạo, hay thấu hiểu người khác. Hãy nhìn nhận bản thân đa chiều hơn, và tin rằng bạn có thể tiến bộ nếu tìm đúng phương pháp."
              }
            ]
          },
          {
            "id": "study_motivation_burnout",
            "userShare": "Tôi học quá nhiều, kiệt sức mất rồi",
            "botResponse": "Kiệt sức vì học tập là dấu hiệu bạn đã vượt quá giới hạn. Cơ thể và tinh thần cần được nghỉ ngơi. Nghỉ ngơi không phải là lười biếng, mà là cách để bạn có thể học tốt hơn sau đó. Bạn có thể cho phép mình một ngày nghỉ thực sự, làm những điều mình thích, không nghĩ đến bài vở. Sức khỏe của bạn là quan trọng nhất.",
            "children": [
              {
                "id": "study_motivation_burnout_guilt",
                "userShare": "Tôi cảm thấy có lỗi khi nghỉ ngơi",
                "botResponse": "Cảm giác tội lỗi khi nghỉ ngơi thường đến từ áp lực phải đạt kết quả. Nhưng bạn thử nghĩ: một vận động viên có thể chạy liên tục không ngừng không? Họ cần nghỉ giữa hiệp để lấy sức. Não bạn cũng vậy. Hãy xem nghỉ ngơi là một phần của quá trình học tập, chứ không phải kẻ thù của nó."
              }
            ]
          }
        ]
      },
      {
        "id": "study_procrastination_focus",
        "userShare": "Tôi hay trì hoãn việc học, cứ để sát deadline mới làm",
        "botResponse": "Trì hoãn là 'căn bệnh' của rất nhiều học sinh, và nó thường không phải do lười, mà do nhiều nguyên nhân sâu xa như sợ thất bại, sợ không làm tốt, hoặc đơn giản là không biết bắt đầu từ đâu. Bạn có nhận thấy mình thường trì hoãn kiểu bài nào không?",
        "children": [
          {
            "id": "study_procrastination_phone",
            "userShare": "Tôi cứ ngồi vào bàn là lại cầm điện thoại, lướt mãi không dừng",
            "botResponse": "Điện thoại là 'kẻ đánh cắp thời gian' số một. Nó cung cấp cho bạn dopamine (cảm giác vui nhanh) ngay lập tức, trong khi việc học thì cần nỗ lực và có kết quả chậm hơn. Bạn có thể thử đặt điện thoại ở phòng khác, hoặc dùng ứng dụng khóa ứng dụng trong giờ học. Bạn cũng có thể tự thưởng cho mình 10 phút lướt mạng sau 25 phút học tập trung (kỹ thuật Pomodoro).",
            "children": [
              {
                "id": "study_procrastination_phone_addicted",
                "userShare": "Tôi biết là hại nhưng không thể bỏ được",
                "botResponse": "Điều đó cho thấy bạn đang bị cuốn vào vòng lặp của thói quen. Để phá vỡ, bạn cần thay thế bằng một thói quen khác dễ dàng hơn. Ví dụ, thay vì cầm điện thoại ngay khi ngồi vào bàn, hãy tập thói quen mở sách ra dù chỉ 2 phút. Bắt đầu từ những bước cực nhỏ sẽ dễ thực hiện hơn là cố gắng bỏ hẳn."
              },
              {
                "id": "study_procrastination_phone_fomo",
                "userShare": "Tôi sợ lỡ tin nhắn, lỡ thông tin gì đó trên mạng",
                "botResponse": "Nỗi sợ bỏ lỡ (FOMO) rất phổ biến. Bạn có thể hẹn giờ kiểm tra tin nhắn vào giờ giải lao, và tin rằng những gì thực sự quan trọng sẽ vẫn ở đó khi bạn quay lại. Dần dần, bạn sẽ học được cách kiểm soát thay vì bị kiểm soát."
              }
            ]
          },
          {
            "id": "study_procrastination_start",
            "userShare": "Tôi không biết bắt đầu từ đâu, thấy ngợp quá nên trì hoãn",
            "botResponse": "Cảm giác ngợp ngàng trước một núi công việc là nguyên nhân hàng đầu của trì hoãn. Bạn có thể thử 'chia nhỏ' con voi. Thay vì nghĩ 'phải học bài Lý', hãy nghĩ 'mở sách Lý ra, đọc 3 trang đầu'. Khi bạn đã bắt đầu, động lực sẽ dần đến. Việc quan trọng nhất là bắt đầu, dù chỉ là một việc rất nhỏ.",
            "children": [
              {
                "id": "study_procrastination_start_too_much",
                "userShare": "Có quá nhiều thứ phải học, tôi không biết ưu tiên cái nào",
                "botResponse": "Khi mọi thứ đều quan trọng, não bạn dễ rơi vào trạng thái tê liệt vì quá tải. Điều này không có nghĩa bạn lười, mà là bạn đang thiếu một tiêu chí chọn lựa. Bạn có thể thử 2 bước đơn giản: (1) Viết ra tất cả việc cần làm. (2) Đánh dấu việc nào có hạn gần nhất hoặc ảnh hưởng điểm nhiều nhất. Đừng cố hoàn hảo – chỉ cần chọn một việc để bắt đầu trong 20–25 phút. Bạn thường bị rối vì quá nhiều bài, hay vì không biết bài nào quan trọng hơn?",
                "children": [
                  {
                    "id": "study_procrastination_start_too_much_all_urgent",
                    "userShare": "Việc nào cũng gấp hết",
                    "botResponse": "Khi mọi việc đều gấp, bạn có thể chia theo mức độ ảnh hưởng: bài nào nộp điểm hệ số cao hơn? bài nào nếu không làm sẽ bị nhắc nhở ngay? Sau đó, chọn việc vừa gấp vừa khó nhất để xử lý trước. Nếu vẫn thấy quá tải, hãy chia mỗi môn thành một phần nhỏ 20 phút. Bạn không cần làm xong hết, chỉ cần làm xong phần đầu tiên."
                  },
                  {
                    "id": "study_procrastination_start_too_much_afraid_choose_wrong",
                    "userShare": "Tôi sợ nếu chọn sai thứ tự thì sẽ hỏng hết",
                    "botResponse": "Sợ chọn sai khiến bạn không dám chọn gì cả. Nhưng thực tế, chọn một việc và làm còn tốt hơn đứng yên. Bạn có thể tự nhủ: 'Mình thử 25 phút, nếu chưa hợp lý thì đổi.' Kế hoạch không phải là hợp đồng cứng nhắc, nó có thể điều chỉnh. Quan trọng là bạn bắt đầu chuyển động."
                  },
                  {
                    "id": "study_procrastination_start_too_much_still_cannot_start",
                    "userShare": "Tôi đã chọn rồi nhưng vẫn không muốn bắt đầu",
                    "botResponse": "Có thể bạn đang đối mặt với cảm giác sợ hoặc chán trước khi làm. Thay vì nghĩ 'phải làm xong', bạn chỉ cần cam kết 5 phút đầu tiên. Đặt đồng hồ 5 phút và bắt đầu. Thường thì khó nhất là bước khởi động. Khi đã vào nhịp, bạn sẽ dễ tiếp tục hơn."
                  },
                  {
                    "id": "study_procrastination_start_too_much_energy_low",
                    "userShare": "Tôi thấy mình không đủ năng lượng để làm hết",
                    "botResponse": "Nếu năng lượng thấp, vấn đề có thể không phải ưu tiên mà là sức bền. Bạn có thể thử học theo chu kỳ: 25 phút tập trung – 5 phút nghỉ, lặp lại 3 lần rồi nghỉ dài hơn. Đồng thời, ngủ đủ và ăn uống đều đặn cũng ảnh hưởng lớn đến khả năng xử lý khối lượng việc. Bạn thường học vào thời điểm nào trong ngày?"
                  }
                ]
              },
              {
                "id": "study_procrastination_start_perfectionism",
                "userShare": "Tôi sợ mình làm không tốt nên không muốn bắt đầu",
                "botResponse": "Nỗi sợ làm không tốt thường không phải vì bạn lười, mà vì bạn quan tâm đến kết quả. Nhưng khi bạn đợi đến lúc 'đủ giỏi' mới bắt đầu, bạn sẽ mãi đứng yên. Thay vì hỏi 'mình có làm tốt không?', hãy thử hỏi 'mình có thể làm phiên bản 60% hôm nay không?'. Bắt đầu ở mức chưa hoàn hảo vẫn tốt hơn là không bắt đầu. Bạn sợ điều gì sẽ xảy ra nếu kết quả không như mong muốn?",
                "children": [
                  {
                    "id": "study_procrastination_start_perfectionism_judged",
                    "children": [
                      {
                        "id": "study_procrastination_start_perfectionism_judged_image",
                        "userShare": "Tôi sợ nếu làm không tốt thì mọi người sẽ nghĩ tôi không giỏi như họ tưởng",
                        "botResponse": "Khi bạn đã từng được khen là giỏi, việc giữ hình ảnh đó có thể trở thành áp lực vô hình. Bạn có thể cảm thấy mình phải luôn đạt chuẩn cao, nếu không sẽ 'mất giá'. Nhưng hình ảnh bên ngoài không quan trọng bằng sự phát triển thật sự bên trong. Nếu bạn chỉ làm khi chắc chắn thành công, bạn sẽ không cho mình cơ hội trưởng thành. Bạn có thấy mình đang cố giữ một phiên bản hoàn hảo của mình không?"
                      }
                    ]
                  },
                  {
                    "id": "study_procrastination_start_perfectionism_identity",
                    "children": [
                      {
                        "id": "study_procrastination_start_perfectionism_identity_core",
                        "userShare": "Tôi luôn nghĩ nếu mình làm kém thì chứng tỏ mình không đủ thông minh",
                        "botResponse": "Niềm tin 'kết quả = trí thông minh' có thể khiến mỗi bài làm trở thành một bài kiểm tra con người bạn. Nhưng trí thông minh không phải là cố định – nó phát triển qua luyện tập. Một lần làm chưa tốt chỉ cho bạn biết kỹ năng đó chưa hoàn thiện, chứ không định nghĩa bạn là ai. Nếu bạn tin rằng năng lực có thể cải thiện, bạn sẽ bớt sợ bắt đầu hơn."
                      }
                    ]
                  },
                  {
                    "id": "study_procrastination_start_perfectionism_wait_ready",
                    "children": [
                      {
                        "id": "study_procrastination_start_perfectionism_wait_ready_hidden",
                        "userShare": "Tôi cứ đọc thêm, chuẩn bị thêm, nhưng vẫn chưa dám làm",
                        "botResponse": "Việc chuẩn bị liên tục có thể là cách bạn tạo cảm giác 'mình đang làm gì đó', trong khi thực tế bạn đang tránh rủi ro thất bại. Hành động mới là nơi tạo ra sự tiến bộ thật. Bạn có thể thử quy tắc: sau 20 phút chuẩn bị, bắt buộc phải làm một phần nhỏ. Khi bạn bắt đầu, bạn sẽ thấy mình học nhanh hơn nhiều so với chỉ đọc và suy nghĩ."
                      }
                    ]
                  },
                  {
                    "id": "study_procrastination_start_perfectionism_compare",
                    "children": [
                      {
                        "id": "study_procrastination_start_perfectionism_compare_fixedmindset",
                        "userShare": "Tôi nghĩ người khác giỏi sẵn rồi, còn tôi thì không",
                        "botResponse": "Khi bạn tin rằng năng lực là bẩm sinh, bạn sẽ dễ bỏ cuộc nếu thấy mình thua kém. Nhưng phần lớn kỹ năng đến từ quá trình luyện tập mà bạn không nhìn thấy. Người khác có thể đã làm sai rất nhiều lần trước khi bạn thấy họ làm tốt. Bạn có thể thử chuyển từ câu hỏi 'Mình có giỏi không?' sang 'Mình có thể cải thiện ở điểm nào?'"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "study_procrastination_environment",
            "userShare": "Không gian học tập của tôi ồn ào, dễ mất tập trung",
            "botResponse": "Môi trường học có ảnh hưởng trực tiếp đến khả năng tập trung của bạn. Khi xung quanh nhiều tiếng động hoặc người qua lại, não bạn sẽ liên tục bị kéo sự chú ý. Nếu có thể, bạn thử chọn một khung giờ yên tĩnh hơn trong ngày để học. Nếu không thay đổi được không gian, bạn có thể tạo 'không gian tập trung tạm thời' cho mình như đeo tai nghe, bật nhạc không lời hoặc đặt một giới hạn thời gian học ngắn (25–30 phút) rồi nghỉ. Điều quan trọng là tạo cảm giác kiểm soát được hoàn cảnh. Ở nhà bạn thường bị làm phiền theo cách nào nhất?",
            "children": [
              {
                "id": "study_procrastination_environment_family",
                "userShare": "Ở nhà lúc nào cũng có người nói chuyện, ti vi, tôi không tập trung được",
                "botResponse": "Khi gia đình sinh hoạt chung, việc có tiếng ồn là điều tự nhiên. Bạn có thể thử trao đổi nhẹ nhàng rằng bạn cần 1–2 khung giờ cố định để học tập trung hơn. Nếu nói trực tiếp khó, bạn có thể viết ra một thời gian biểu dán ở bàn học để mọi người biết. Ngoài ra, bạn có thể chuyển sang học những phần nhẹ hơn khi ồn, và dành phần cần tập trung cao cho thời điểm yên tĩnh hơn. Bạn đã từng thử chia nhỏ bài học theo mức độ tập trung chưa?",
                "children": [
                  {
                    "id": "study_procrastination_environment_family_no_control",
                    "userShare": "Tôi không thể yêu cầu gia đình yên tĩnh được",
                    "botResponse": "Nếu bạn không thể thay đổi môi trường, hãy tập trung vào việc tăng 'khả năng chống nhiễu' của mình. Bạn có thể dùng tai nghe chống ồn, bật âm thanh trắng (white noise), hoặc nhạc nền đều đều để che tiếng ngoài. Một cách khác là đặt mục tiêu học rất ngắn: 15–20 phút tập trung tối đa, rồi nghỉ 5 phút. Khi thời gian ngắn, não bạn dễ cam kết hơn. Bạn có muốn thử phương pháp học ngắn nhưng lặp lại nhiều lần không?"
                  }
                ]
              },
              {
                "id": "study_procrastination_environment_shared_room",
                "userShare": "Tôi không có phòng riêng, phải học chung với người khác",
                "botResponse": "Học chung phòng có thể khiến bạn phân tâm vì chuyển động và âm thanh xung quanh. Bạn có thể thử sắp xếp một góc cố định chỉ dành cho học tập, dù nhỏ. Khi não quen với 'góc đó là để học', khả năng tập trung sẽ tốt hơn. Ngoài ra, việc dọn bàn học gọn gàng cũng giúp giảm kích thích thị giác. Không gian nhỏ nhưng ổn định vẫn hiệu quả hơn không gian lớn nhưng lộn xộn."
              },
              {
                "id": "study_procrastination_environment_noise_sensitivity",
                "userShare": "Tôi rất nhạy cảm với tiếng động nhỏ cũng mất tập trung",
                "botResponse": "Nếu bạn nhạy cảm với âm thanh, não bạn dễ bị kéo khỏi nhiệm vụ chính. Điều này không có nghĩa bạn kém tập trung, mà chỉ là hệ thần kinh của bạn phản ứng mạnh hơn với môi trường. Bạn có thể thử tạo một âm nền ổn định như tiếng mưa, tiếng quạt, hoặc nhạc không lời để che những tiếng động bất chợt. Khi âm nền ổn định, não sẽ ít bị giật mình hơn."
              }
            ]
          },
          {
            "id": "study_procrastination_no_plan",
            "userShare": "Tôi học không có kế hoạch, thích môn nào học môn đó, rồi cuối cùng chẳng xong",
            "botResponse": "Học mà không có kế hoạch giống như đi mà không có định hướng. Bạn sẽ bận rộn nhưng không chắc đã tiến bộ. Tuy nhiên, nhiều bạn không phải vì lười, mà vì không biết bắt đầu lập kế hoạch từ đâu. Kế hoạch không cần hoàn hảo, chỉ cần đủ rõ để bạn biết hôm nay mình làm gì. Bạn gặp khó ở chỗ lập kế hoạch hay ở chỗ không làm theo kế hoạch?",
            "children": [
              {
                "id": "study_procrastination_no_plan_cannot_make",
                "userShare": "Tôi không biết phải lập kế hoạch như thế nào",
                "botResponse": "Bạn có thể bắt đầu rất đơn giản. Đừng nghĩ đến cả tuần hay cả tháng, chỉ cần lập kế hoạch cho một buổi tối. Bước 1: Viết ra 3 việc quan trọng nhất. Bước 2: Ước lượng mỗi việc cần bao lâu. Bước 3: Sắp xếp theo thứ tự ưu tiên (môn khó trước, dễ sau). Khi bạn làm được một buổi, bạn sẽ có cảm giác kiểm soát hơn. Bạn có muốn thử lập kế hoạch cho tối nay ngay bây giờ không?",
                "children": [
                  {
                    "id": "study_procrastination_no_plan_overwhelm",
                    "userShare": "Tôi thấy bài nhiều quá nên không biết bắt đầu từ đâu",
                    "botResponse": "Khi bài quá nhiều, não sẽ cảm thấy quá tải và chọn cách né tránh. Thay vì nhìn toàn bộ, bạn hãy chọn phần nhỏ nhất có thể làm trong 15 phút. Ví dụ: chỉ làm 3 câu Toán, hoặc đọc 2 trang Văn. Khi bắt đầu được, bạn sẽ bớt cảm giác nặng nề. Điều quan trọng không phải làm hết, mà là bắt đầu."
                  }
                ]
              },
              {
                "id": "study_procrastination_no_plan_not_follow",
                "userShare": "Tôi lập kế hoạch rồi nhưng không làm theo được",
                "botResponse": "Điều này khá phổ biến. Có thể kế hoạch của bạn quá dày đặc hoặc thiếu thời gian nghỉ. Một kế hoạch tốt cần có khoảng trống để thở. Bạn có thể thử nguyên tắc 70%: chỉ lên lịch khoảng 70% thời gian, còn lại để linh hoạt. Ngoài ra, bạn nên tự hỏi: mình không làm theo vì mệt, vì chán hay vì sợ môn đó?",
                "children": [
                  {
                    "id": "study_procrastination_no_plan_avoid_difficult",
                    "userShare": "Tôi hay né môn khó, toàn học môn dễ trước",
                    "botResponse": "Né môn khó giúp bạn cảm thấy thoải mái tạm thời, nhưng áp lực sẽ quay lại sau. Bạn có thể thử quy tắc 'ăn ếch trước' – làm phần khó nhất trong 20–30 phút đầu khi còn tỉnh táo. Sau đó bạn sẽ cảm thấy nhẹ hơn và có động lực hơn cho phần còn lại."
                  }
                ]
              },
              {
                "id": "study_procrastination_no_plan_mood_based",
                "userShare": "Tôi chỉ học theo cảm hứng",
                "botResponse": "Học theo cảm hứng có thể thú vị, nhưng cảm hứng không phải lúc nào cũng đến. Kỷ luật nhẹ nhàng sẽ giúp bạn tiến xa hơn cảm hứng. Bạn có thể tạo một thói quen cố định: cùng một giờ, cùng một chỗ, mỗi ngày. Khi não quen với nhịp đó, bạn sẽ ít phải phụ thuộc vào cảm xúc hơn."
              }
            ]
          }
        ]
      },
      {
        "id": "study_methods",
        "userShare": "Tôi không biết phương pháp học nào hiệu quả",
        "botResponse": "Rất nhiều học sinh chăm chỉ nhưng học sai cách nên kết quả không như mong muốn. Phương pháp học đúng sẽ giúp bạn tiết kiệm thời gian và nhớ lâu hơn. Bạn có thể mô tả cách bạn đang học một môn nào đó không? Mình có thể gợi ý cách cải thiện.",
        "children": [
          {
            "id": "study_methods_rote",
            "userShare": "Tôi thường đọc đi đọc lại nhiều lần cho thuộc",
            "botResponse": "Đọc đi đọc lại là cách học thụ động, dễ khiến bạn lơ đễnh và nhanh quên. Não bạn cần được 'thử thách' để ghi nhớ lâu hơn. Hãy thử phương pháp 'chủ động nhớ lại': sau khi đọc một đoạn, hãy gấp sách lại và tự tóm tắt hoặc đặt câu hỏi. Nếu bạn nhớ sai, hãy mở sách ra xem lại ngay. Cách này hiệu quả hơn nhiều.",
            "children": [
              {
                "id": "study_methods_rote_questions",
                "userShare": "Tôi không biết đặt câu hỏi gì",
                "botResponse": "Bạn có thể bắt đầu bằng những câu hỏi đơn giản như 'Đoạn này nói về ý chính gì?', 'Có những ý nhỏ nào?', 'Nó liên quan thế nào đến bài trước?'. Hoặc bạn có thể tưởng tượng mình là giáo viên và phải giải thích lại cho học sinh."
              }
            ]
          },
          {
            "id": "study_methods_forget",
            "userShare": "Tôi học trước quên sau, không nhớ được bài lâu",
            "botResponse": "Quên là quy luật tự nhiên nếu bạn không ôn tập đúng cách. Não bạn cần được nhắc lại kiến thức theo những khoảng thời gian nhất định. Hãy thử ôn tập theo lịch: sau 1 ngày, sau 3 ngày, sau 1 tuần, sau 1 tháng. Chỉ cần ôn lại nhanh mỗi lần, bạn sẽ nhớ rất lâu. Đây gọi là 'lặp lại ngắt quãng'.",
            "children": [
              {
                "id": "study_methods_forget_review",
                "userShare": "Tôi không có thời gian ôn lại nhiều lần",
                "botResponse": "Bạn không cần ôn lại nguyên một bài dài. Chỉ cần dành 5-10 phút xem lại sơ đồ tư duy, ghi chú tóm tắt, hoặc làm vài câu hỏi trắc nghiệm nhanh. Việc ôn tập đều đặn còn tiết kiệm thời gian hơn là học lại từ đầu khi sắp thi."
              }
            ]
          },
          {
            "id": "study_methods_notes",
            "userShare": "Tôi ghi chép rất nhiều nhưng không biết cách học từ ghi chép",
            "botResponse": "Ghi chép quá nhiều mà không có cấu trúc có thể khiến bạn ngợp. Hãy thử phương pháp Cornell: chia trang giấy thành 3 phần: cột chính để ghi ý chính, cột phụ để ghi câu hỏi/từ khóa, và phần dưới để tóm tắt. Khi học, bạn che phần chính và dùng cột phụ để tự kiểm tra. Rất hiệu quả!",
            "children": [
              {
                "id": "study_methods_notes_visual",
                "userShare": "Tôi là người học bằng hình ảnh, ghi chép nhiều chữ khó nhớ",
                "botResponse": "Tuyệt! Bạn có thể thử vẽ sơ đồ tư duy (mind map) với ý chính ở trung tâm và các nhánh tỏa ra. Sử dụng màu sắc, hình vẽ để minh họa. Não bạn sẽ ghi nhớ hình ảnh tốt hơn là chữ. Bạn có thể bắt đầu với một bài học ngắn."
              }
            ]
          },
          {
            "id": "study_methods_exam",
            "userShare": "Tôi không biết cách ôn thi và làm bài thi sao cho tốt",
            "botResponse": "Ôn thi không chỉ là học lại tất cả, mà là chiến lược. Trước hết, hãy xác định dạng đề thi (tự luận, trắc nghiệm) và trọng tâm kiến thức. Sau đó, lập kế hoạch ôn theo từng phần. Khi làm bài, hãy đọc lướt qua đề, làm câu dễ trước, câu khó sau. Đừng sa lầy vào một câu quá lâu. Bạn thường gặp khó khăn gì khi ôn thi?",
            "children": [
              {
                "id": "study_methods_exam_stress",
                "userShare": "Tôi rất lo lắng khi vào phòng thi, không nhớ gì",
                "botResponse": "Lo lắng khi thi là bình thường, nhưng nó có thể làm bạn 'đơ'. Hãy thử tập thở sâu vài lần trước khi làm bài. Nhắc nhở bản thân: 'Mình đã ôn kỹ rồi, cứ bình tĩnh làm từ từ'. Khi gặp câu khó, hãy bỏ qua và làm câu khác để lấy lại tự tin."
              },
              {
                "id": "study_methods_exam_time",
                "userShare": "Tôi thường không đủ thời gian làm bài",
                "botResponse": "Vấn đề thời gian thường do chưa phân bổ hợp lý. Khi luyện đề ở nhà, hãy bấm giờ như thi thật. Xem mỗi phần nên dành bao nhiêu phút. Khi thi, nếu thấy một câu quá lâu, hãy đánh dấu và chuyển sang câu khác. Quan trọng là hoàn thành bài trong thời gian cho phép."
              }
            ]
          },
          {
            "id": "study_methods_understand",
            "userShare": "Tôi học vẹt mà không hiểu bản chất",
            "botResponse": "Học vẹt là học thuộc lòng mà không hiểu, rất dễ quên và không thể áp dụng. Để hiểu bản chất, hãy thử tự đặt câu hỏi 'Tại sao lại như vậy?' và tìm cách giải thích bằng ngôn ngữ của mình. Bạn cũng có thể liên hệ với thực tế hoặc kiến thức đã học trước đó. Khi đã hiểu, việc nhớ sẽ nhẹ nhàng hơn."
          }
        ]
      }
    ]
  }
};