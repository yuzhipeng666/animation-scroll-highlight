import { defineComponent, ref,onMounted, reactive } from 'vue'
import styles from './index.module.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const ScrollHighlight = defineComponent({
  props: {
    list: Array<string>
  },
  setup(props) {
    const activeIndex = ref(0);
    const reactiveTextList = reactive([]) as Array<Element | null>;

    gsap.registerPlugin(ScrollTrigger);

    function renderText(vo:string, index: number) {
      return <span class={ index === activeIndex.value && styles.active } ref={(ele) => reactiveTextList.push(ele as Element)}>{vo}</span>
    }
    onMounted(() => {
      reactiveTextList.forEach((ele, index) => {
        ScrollTrigger.create({
          trigger: ele,
          start: `center ${50 - index}%`,
          end: `bottom ${50 - index}%`,
          onEnter() {
            activeIndex.value = index
          },
          onEnterBack() {
            activeIndex.value = index
          }
        });
      })
    });
    return () => (
      <div class={styles.scrollHighlight}>
        {props.list?.map(renderText)}
      </div>
    )
  }
})

export default ScrollHighlight
