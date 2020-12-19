$(function(){
    // 가장 높은 금액의 면세점
    var _compTarget = $("#survey4"),
        _compEl = _compTarget.find('li'),
        _compNumber = _compEl.find('p input'),
        _compArr = [],
        _compMaxValue = '',
        _surveyFlow = '',
        _index = 0;

    _compNumber.on('change', function(e){
        var _thisValue = Number( $(this).val() ),
            _thisIndex = $(this).closest("li").index();

        _compArr[_thisIndex] = _thisValue;
        _compMaxValue = _compArr.reduce( function (prev, cur) {
            return prev > cur ? prev:cur;
        });
        _compMaxValue = _compEl.eq( _compArr.indexOf(_compMaxValue) ).find("h3 span").text();
        $("#survey7 .max_value").text( _compMaxValue );
    });

    // 다음 클릭 시 오류 검사
    $("#footer button").on('click', function(){
        var _active         = $(".survey_cont .active"),
            _activeInput    = _active.find("input"),
            _inpRadioLength = _active.find("input[type='radio']").length,
            _inpChkLength   = _active.find("input[type='checkbox']").length,
            _inpNumLength   = _active.find("input[type='number']").length,
            _inpCountRadio  = _active.find("input[type='radio']:checked").length,
            _inpCountChk    = _active.find("input[type='checkbox']:checked").length,
            _inpCountNum    = '';
        
            _surveyFlow     = _active.attr("id");

        // 각 인풋의 숫자 계산
        _activeInput.each(function(){
            _inputType  = $(this).prop("type"),
            _inpValue   = $(this).val();

            if( _inputType == "number" && _inpValue != "" ){
                _inpCountNum++;
            }
        });

        // 라디오만 있고 다른 케이스 없음
        if( _inpRadioLength != 0 ){
            // 라디오만 있는 8번 설문 예외 처리
            if( _surveyFlow == "survey8" ){
                var _count01 = 0,
                    _count02 = $('.survey_cont #survey8 li').length;
                    
                $('.survey_cont #survey8 input').each(function(){
                    if( $(this).prop("checked") ){
                        _count01++;
                    }
                });
                _count01 == _count02 ? nextSurvey() : validation();
            } else {
                _inpCountRadio > 0 ? nextSurvey() : validation();
            }
        }
        
        // 체크박스만 있거나 체크박스 + 넘버 같이 있는 케이스
        if( _inpChkLength != 0 ){
            if( _inpNumLength == 0 ){
                _inpCountChk > 0 ? nextSurvey() : validation();
            } else {
                // 체크 + 넘버 4번 설문만 예외 처리
                if( _surveyFlow == "survey4" ){
                    var _countOn = '',
                        _countOff = '';
                    $('.survey_cont #survey4 li').each(function(){
                        var _targerType  = $(this).find("input[type='number']").val(),
                            _targetCountChk = $(this).find("input[type='checkbox']:checked").length;

                        // 체스박스만 선택
                        if( _targetCountChk > 0 && _targerType == 0 ){
                            console.log("1");
                            _countOff--;
                        // 넘버만 선택 + 넘버 값이 0이 아닐 경우
                        } else if( _targetCountChk == 0 && _targerType > 0 ){
                            console.log("2");
                            _countOff--;
                        // 체크박스 선택 + 넘버 0 이상
                        } else if( _targetCountChk > 0 && _targerType != 0 ){
                            console.log("3");
                            _countOn++;
                        }
                        //console.log(_countOn, _countOff);
                    });
                    //_countOn > 0 && _countOff == '' ? console.log('next') : console.log('return');
                    _countOn > 0 && _countOff == '' ? nextSurvey() : validation();
                } else {
                    _inpCountChk > 0 && _inpCountNum > 0 ? nextSurvey() : validation();
                }
            }
        }
        
        // 넘버만 있고 다른 케이스 없음
        if( _inpNumLength != 0 ){
            if( _inpChkLength == 0 ){
                if(_inpCountNum == _inpNumLength){
                    if( _surveyFlow == "survey3" ){
                        var _count01 = Number( $(".survey_cont #survey3 input").eq(0).val() );
                            _count02 = Number( $(".survey_cont #survey3 input").eq(1).val() );
                        if( _count01 < _count02 ){
                            alert("면세점 이용 횟수 오류");
                            return;
                        }
                    }
                    nextSurvey();
                } else {
                    validation();
                }
            }
        }
    });
    
    function nextSurvey(){
        switch (_surveyFlow) {
            case 'survey13':
                _index = 8;
                break;
            case 'survey14':
                _index = 11;
                break;
            case 'survey16':
                _index = 13;
                break;
            case 'survey1':
                $('.survey_cont #survey1 input').each(function(){
                    if( $(this).prop("checked") ){
                        var _checkIdx = $(this).closest("span").index();
                        if( _checkIdx == 0 ){
                            _index = 2;
                        } else if( _checkIdx == 1 ){
                            _index = 12;
                        } 
                    }
                });
                break;
            case 'survey3':
                if( $('.survey_cont #survey3 input').eq(0).val() == 0 && $('.survey_cont #survey3 input').eq(1).val() == 0 ){
                    _index = 15;
                } else if( $('.survey_cont #survey3 input').eq(0).val() != 0 ){
                    if( $('.survey_cont #survey3 input').eq(1).val() == 0 ){
                        _index = 15;
                    } else {
                        _index = 4;
                    }
                }
                break;
            case 'survey4':
                $('.survey_cont #survey4 input').each(function(){
                    if( $(this).prop("checked") && $(this).val() != '' ){
                        var _checkIdx = $(this).closest("li").index();
                        _checkIdx == 0 || _checkIdx == 4 ? _index = 6 : _index = 5;
                    }
                });
                break;
            case 'survey10':
                $('.survey_cont #survey10 input').each(function(){
                    if( $(this).prop("checked") ){
                        var _checkIdx = $(this).closest("span").index();
                        if( _checkIdx == 0 ){
                            _index = 11;
                        } else if( _checkIdx == 1 ){
                            _index = 14;
                        } 
                    }
                });
                break;
            case 'survey15':
                $('.survey_cont #survey15 input').each(function(){
                    if( $(this).prop("checked") ){
                        var _checkIdx = $(this).closest("span").index();
                        _checkIdx == 3 ? _index = 16 : _index = 13;
                    }
                });
                break;
            default: _index = $(".survey_cont .active").index()+2;
        }
        if( _index == 11 ){
            $("#header").show();
            $("#footer").hide();
        }
        $('.survey_cont #survey'+_index).addClass("active").siblings("div").removeClass("active");
        $(window).scrollTop(0);
    }
    function validation(){
        alert("답변을 입력해 주세요");
    }
});