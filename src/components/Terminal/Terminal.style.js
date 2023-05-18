import styled from "styled-components";

export const TerminalWrapper = styled.div`
  --blue: #14c6cb;
  --vagrant-l1: #66a2ff;
  --white: #fff;
  --gray-7: #f7f7f9;
  --gray-6: #dcdde0;
  --gray-5: #bdbec2;
  --gray-4: #76767d;    
  --gray-3: #4c4c53;
  --gray-2: #323339;
  --gray-1: #1d1e23;
  --terminal-radius: 2px;
  --terminal-title-color: var(--gray-2);
  --terminal-body-color: var(--gray-1);

  width: 837px;

  .title-bar {
    display: flex;
    align-items: center;
    background: var(--terminal-title-color);
    width: 100%;
    height: 46px;
    border-radius: var(--terminal-radius) var(--terminal-radius) 0 0;

    .title {
      color: var(--gray-4);
      font-family: 'Courier New', Courier, monospace;
      font-size: 13.5px;
      margin: 0 auto;
    }

    .window-controls {
      position: absolute;
      display: block;
      list-style: none;
      margin-left: 16px;
      margin-top: 0;
      margin-bottom: 0;
      padding: 0;

      li {
        display: inline-block;
        width: 14px;
        height: 14px;
        background: var(--gray-1);
        border-radius: 12px;
        margin-right: 7px;
      }
    }
  }

  .content {
    width: 100%;
    min-height: 525px;
    height: 100%;
    background: var(--terminal-body-color);
    border-radius: 0 0 var(--terminal-radius) var(--terminal-radius);
    padding: 24px 32px;
    @media (min-width: 768px) {
      height: 525px;
    }
  }

.overflow-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: scroll;

  /* Hides the scrollbars */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    /* Safari */
    -webkit-appearance: none;
    width: 0;
    height: 0;
  }
  
  .code-wrapper {
    pre {
      padding: 0;
      margin: 0;
      width: 100%;
      height: 100%;
      font-style: normal;
      font-weight: normal;
      font-size: 10px;
      line-height: 27px;
      white-space: pre-wrap;
      color: ${props => props.theme.secondaryColor};
      &.short {
        line-height: 16px;
      }
      &.navy {
        color: var(--vagrant-l1);
      }
      &.gray {
        color: var(--gray-5);
      }
      &.white {
        color: var(--white);
      }

      wrap-word: normal;
      max-width: 17rem;
      
      @media (min-width: 768px){
        font-size: 13.5px;
        line-height: 26px;
      }
    }
  }
}

.no-scroll-overflow-wrapper {

  .code-wrapper {
    bottom: 0;
    position: absolute;
    min-height: 100%;
  }
}`;
