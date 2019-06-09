import React from "react";
import "../../public/assets/css/countdown-timer.css";
//import bg from "./bg_1.svg";

class CountdownTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    //Countdown.init();
    const days = this.props.days;
    var Countdown = {
      // Backbone-like structure
      $el: $(".countdown"),

      // Params
      countdown_interval: null,
      total_seconds: 0,

      // Initialize the countdown
      init: function() {
        const date = new Date();
        // const hours = date.getHours();
        // const minutes = date.getMinutes();
        // const seconds = date.getSeconds();
        const hours = 0;
        const minutes = 0;
        const seconds = 3;

        // DOM
        this.$ = {
          days: this.$el.find(".bloc-time.days .figure"),
          hours: this.$el.find(".bloc-time.hours .figure"),
          minutes: this.$el.find(".bloc-time.min .figure"),
          seconds: this.$el.find(".bloc-time.sec .figure")
        };

        // Init countdown values
        this.values = {
          days,
          hours,
          minutes,
          seconds
        };

        // Initialize total seconds
        this.total_seconds =
          this.values.hours * 60 * 60 +
          this.values.minutes * 60 +
          this.values.seconds;

        // Animate countdown to the end
        this.count();
      },

      count: function() {
        var that = this,
          $days_1 = this.$.days.eq(0),
          $days_2 = this.$.days.eq(1),
          $hour_1 = this.$.hours.eq(0),
          $hour_2 = this.$.hours.eq(1),
          $min_1 = this.$.minutes.eq(0),
          $min_2 = this.$.minutes.eq(1),
          $sec_1 = this.$.seconds.eq(0),
          $sec_2 = this.$.seconds.eq(1);

        this.countdown_interval = setInterval(function() {
          if (that.total_seconds > 0) {
            --that.values.seconds;

            if (that.values.minutes >= 0 && that.values.seconds < 0) {
              that.values.seconds = 59;
              --that.values.minutes;
            }

            if (that.values.hours >= 0 && that.values.minutes < 0) {
              that.values.minutes = 59;
              --that.values.hours;
            }

            // Update DOM values
            // Days
            that.checkHour(that.values.days, $days_1, $days_2);

            // Hours
            that.checkHour(that.values.hours, $hour_1, $hour_2);

            // Minutes
            that.checkHour(that.values.minutes, $min_1, $min_2);

            // Seconds
            that.checkHour(that.values.seconds, $sec_1, $sec_2);

            --that.total_seconds;
          } else {
            if (
              that.values.days === 0 &&
              that.values.hours === 0 &&
              that.values.minutes === 0 &&
              that.values.seconds === 0
            ) {
              clearInterval(that.countdown_interval);
            } else {
              if (that.values.hours === 0 && that.values.minutes === 0) {
                that.values.days = that.values.days - 1;
              }
              that.values.hours = 24;
              that.total_seconds = 59;
            }
          }
        }, 1000);
      },

      animateFigure: function($el, value) {
        var that = this,
          $top = $el.find(".top"),
          $bottom = $el.find(".bottom"),
          $back_top = $el.find(".top-back"),
          $back_bottom = $el.find(".bottom-back");

        // Before we begin, change the back value
        $back_top.find("span").html(value);

        // Also change the back bottom value
        $back_bottom.find("span").html(value);

        // Then animate
        TweenMax.to($top, 0.8, {
          rotationX: "-180deg",
          transformPerspective: 300,
          ease: Quart.easeOut,
          onComplete: function() {
            $top.html(value);

            $bottom.html(value);

            TweenMax.set($top, { rotationX: 0 });
          }
        });

        TweenMax.to($back_top, 0.8, {
          rotationX: 0,
          transformPerspective: 300,
          ease: Quart.easeOut,
          clearProps: "all"
        });
      },

      checkHour: function(value, $el_1, $el_2) {
        var val_1 = value.toString().charAt(0),
          val_2 = value.toString().charAt(1),
          fig_1_value = $el_1.find(".top").html(),
          fig_2_value = $el_2.find(".top").html();

        if (value >= 10) {
          // Animate only if the figure has changed
          if (fig_1_value !== val_1) this.animateFigure($el_1, val_1);
          if (fig_2_value !== val_2) this.animateFigure($el_2, val_2);
        } else {
          // If we are under 10, replace first figure with 0
          if (fig_1_value !== "0") this.animateFigure($el_1, 0);
          if (fig_2_value !== val_1) this.animateFigure($el_2, val_1);
        }
      }
    };
    Countdown.init();
  }

  render() {
    return (
      <div className="section text-center grey_bg">
        <h1 className="title text-danger">Counter</h1>

        <div className="countdown">
          <div className="row">
            <div className="col-md-3">
              <div className="bloc-time days" data-init-value="0">
                <span className="count-title">Days</span>

                <div className="figure days days-1">
                  <span className="top">2</span>
                  <span className="top-back">
                    <span>2</span>
                  </span>
                  <span className="bottom">2</span>
                  <span className="bottom-back">
                    <span>2</span>
                  </span>
                </div>

                <div className="figure days days-2">
                  <span className="top">4</span>
                  <span className="top-back">
                    <span>4</span>
                  </span>
                  <span className="bottom">4</span>
                  <span className="bottom-back">
                    <span>4</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="bloc-time hours" data-init-value="24">
                <span className="count-title">Hours</span>

                <div className="figure hours hours-1">
                  <span className="top">2</span>
                  <span className="top-back">
                    <span>2</span>
                  </span>
                  <span className="bottom">2</span>
                  <span className="bottom-back">
                    <span>2</span>
                  </span>
                </div>

                <div className="figure hours hours-2">
                  <span className="top">4</span>
                  <span className="top-back">
                    <span>4</span>
                  </span>
                  <span className="bottom">4</span>
                  <span className="bottom-back">
                    <span>4</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="bloc-time min" data-init-value="0">
                <span className="count-title">Minutes</span>

                <div className="figure min min-1">
                  <span className="top">0</span>
                  <span className="top-back">
                    <span>0</span>
                  </span>
                  <span className="bottom">0</span>
                  <span className="bottom-back">
                    <span>0</span>
                  </span>
                </div>

                <div className="figure min min-2">
                  <span className="top">0</span>
                  <span className="top-back">
                    <span>0</span>
                  </span>
                  <span className="bottom">0</span>
                  <span className="bottom-back">
                    <span>0</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="bloc-time sec" data-init-value="0">
                <span className="count-title">Seconds</span>

                <div className="figure sec sec-1">
                  <span className="top">0</span>
                  <span className="top-back">
                    <span>0</span>
                  </span>
                  <span className="bottom">0</span>
                  <span className="bottom-back">
                    <span>0</span>
                  </span>
                </div>

                <div className="figure sec sec-2">
                  <span className="top">0</span>
                  <span className="top-back">
                    <span>0</span>
                  </span>
                  <span className="bottom">0</span>
                  <span className="bottom-back">
                    <span>0</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CountdownTimer;
