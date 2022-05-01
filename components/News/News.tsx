import styled from 'styled-components';
import Image from 'next/image';
import { NewsPosts } from '../utils/News';
import Link from 'next/link';
export const Container = styled.div`
  width: 100%;
  max-width: ${(props: any) => (props.maxWidth ? props.maxWidth : '1200px')};
  margin-left: auto;
  margin-right: auto;
`;

const NewsWrapper = styled.div`
  padding: 80px 0;
  width: 100%;

  display: flex;
  flex-wrap: wrap;

  .title {
    margin-bottom: 30px;
  }
  .new__wrapper {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
  .card {
    width: 380px;
    height: max-height;
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    overflow: hidden;
    .card__img {
      width: 380px;
      height: 300px;
      background: yellow;

      img {
        width: 380px !important;
        height: 300px !important;
        object-fit: cover;
      }
    }
    .card__body {
      width: 100%;
      .card__title {
        padding: 10px 20px 2px 20px;
        font-size: 0.8rem;
        color: rgba(0, 0, 0, 0.8);
        line-height: 1.8rem;

        &::first-letter {
          text-transform: capitalize;
        }
      }
      .card__desc {
        padding: 0 20px 10px 20px;
        font-size: 0.8rem;
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
`;
const loader = ({ src, width }: any) => {
  return `${src}?w=${width}`;
};

const News = () => {
  return (
    <>
      <Container id="news">
        <NewsWrapper>
          <div className="container">
            <div className="title">
              <h1>Explore endless posibilities with vefi.</h1>
            </div>
            <div className="new__wrapper">
              {NewsPosts.map((post: any, i: any) => (
                <div key={i}>
                  <Link passHref href={post.url}>
                    <a>
                      <div className="card">
                        <div className="card__img">
                          <Image loader={loader} src={post.img} alt={post.title} width={200} height={200} />
                        </div>
                        <div className="card__body">
                          <div className="card__title">
                            <h1>{post.title}</h1>
                          </div>
                          <div className="card__desc">
                            <p>{post.desc}</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </NewsWrapper>
      </Container>
    </>
  );
};

export default News;
